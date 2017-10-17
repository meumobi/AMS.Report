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