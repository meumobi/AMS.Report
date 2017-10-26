const functions = require('firebase-functions');
const admin = require('firebase-admin');  
exports.handler = event => {
  const userData = event.data;
  const id = event.params.id;
  const email = userData.child("email");
  const password = userData.child("password");
  admin.auth().createUser({
    email: `${email.val()}`,
    emailVerified: true,
    password: `${password.val()}`,
    disabled: false
  })
  .then(function(userRecord) {
    console.log("Successfully created new user:", userRecord.uid);
  })
  .catch(function(error) {
    console.log("Error creating new user:", error);
  });
}