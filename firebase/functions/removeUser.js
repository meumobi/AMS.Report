const functions = require('firebase-functions');
const admin = require('firebase-admin');  
exports.handler = event => {
  admin.initializeApp(functions.config().firebase);
  const email = event.data.previous.val();
  admin.auth().getUserByEmail(email)
  .then(function(user) {
    const uid = user.uid;
    admin.auth().deleteUser(uid)
    .then(function() {
      console.log("User Deleted");
    })
    .catch(function(error) {
      console.log("Error Delete:", error);
    });
  })
  .catch(function(error) {
    console.log("Error List:", error);  
  });
};