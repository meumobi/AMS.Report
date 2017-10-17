const functions = require('firebase-functions');
const sha1 = require('sha1');
const format = require("date-format-lite")
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.setLatestUnpluggedImport = functions.https.onRequest((req, res) => {
  const token = "2e6f9b0d5885b6010f9167787445617f553a735f";
  const pwd = sha1(req.query.pwd);
  if (token == pwd){
    var date = new Date();
    const latestUnpluggedImport = date.format("YYYY-MM-DD");
    admin.database().ref('/settings').update({latestUnpluggedImport: latestUnpluggedImport}).then(snapshot => {
      console.log("Latest Unplugged Import Updated");
      res.send("ok");
    }).catch(function(error) {
      console.log("Error Updating Latest Unplugged Import:", error);
      res.send("nok");      
    });
  } else {
    console.log("Wrong psw");
    res.send("nok");
  }
 });

exports.createUser = functions.database.ref('/users/{id}')
.onCreate(event => {
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
});

exports.updateUser = functions.database.ref('/users/{id}')
.onWrite(event => {
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
});


