const functions = require('firebase-functions');
const admin = require('firebase-admin');  
exports.handler = event => {
  admin.initializeApp(functions.config().firebase);	  	
  const userData = event.data;
  const emailPrev = event.data.previous.child("email");
  const id = event.params.id;
  const email = userData.child("email");
  const password = userData.child("password");
  if (email.changed() || password.changed()){
    admin.auth().getUserByEmail(emailPrev.val())
    .then(function(user) {
      const uid = user.uid;
      admin.auth().updateUser(uid,{
        email: `${email.val()}`,
        password: `${password.val()}`,
      })
      .then(function(userRecord) {
        console.log("Successfully updated user:", userRecord.uid);
      })
      .catch(function(error) {
        console.log("Error updating user:", error);
      });
    })
  }  
}