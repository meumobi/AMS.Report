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
