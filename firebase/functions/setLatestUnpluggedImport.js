const admin = require('firebase-admin');
const functions = require('firebase-functions');
const moment = require('moment');
exports.handler = (req, res) => {
  admin.database().ref('/settings').once('value').then(function(snapshot) {
    const tokenSaved = snapshot.val().completeCompilatedDateToken;
    const tokenPassed = req.query.token;
    if (tokenPassed == tokenSaved){
      var latestUnpluggedImport;
      if (req.query.text){
        latestUnpluggedImport = moment(req.query.text);
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
 };