const functions = require('firebase-functions');
const sha1 = require('sha1');
const format = require("date-format-lite")
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.setLastDate = functions.https.onRequest((req, res) => {
  const token = "2e6f9b0d5885b6010f9167787445617f553a735f";
  const pwd = sha1(req.query.pwd);
  if (token == pwd){
    var date = new Date();
    const lastDate = date.format("YYYY-MM-DD");
    admin.database().ref('/lastDate').update({last: lastDate}).then(snapshot => {
      console.log("Last Date Updated");
      res.send("ok");
    }).catch(function(error) {
      console.log("Error Updating Last Date:", error);
      res.send("nok");      
    });
  } else {
    console.log("Wrong psw");
    res.send("nok");
  }
 });
