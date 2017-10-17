const functions = require('firebase-functions');
const sha1 = require('sha1');
const admin = require('firebase-admin');
const moment = require('moment');
admin.initializeApp(functions.config().firebase);

exports.setLatestUnpluggedImport = functions.https.onRequest((req, res) => {
  admin.database().ref('/settings').once('value').then(function(snapshot) {
    const token = sha1(snapshot.val().password);
      const passwd = sha1(req.query.passwd);
      if (token == passwd){
        var latestUnpluggedImport;
        if (req.query.date){
          latestUnpluggedImport = moment(req.query.date);
        } else {
          latestUnpluggedImport = moment(new Date());
        }
        if (latestUnpluggedImport.isValid()){
          latestUnpluggedImport = latestUnpluggedImport.format("YYYY-MM-DD");
          admin.database().ref('/settings').update({latestUnpluggedImport: latestUnpluggedImport}).then(snapshot => {
            console.log("Latest Unplugged Import Updated");
            res.send("ok");
          }).catch(function(error) {
            console.log("Error Updating Latest Unplugged Import:", error);
            res.send("nok");      
          });
        } else {
          console.log("Wrong date format");
          res.send("nok");
        }
        
      } else {
        console.log("Wrong passwd");
        res.send("nok");
      }
  });  
 });

exports.removeUser = functions.database.ref('/users/{pushId}/email').onDelete(event => {
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