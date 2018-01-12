const moment = require('moment');
exports.handler = (req, res, admin) => {
  admin.database().ref('/settings').once('value').then(function(snapshot) {
    const tokenSaved = snapshot.val().completeCompilatedDateToken;
    const tokenPassed = req.query.token;
    if (tokenPassed == tokenSaved){
      var latestSafeCompiledDate;
      if (req.query.text){
        latestSafeCompiledDate = moment(req.query.text);
      } else {
        latestSafeCompiledDate = moment(new Date());
      }
      if (latestSafeCompiledDate.isValid()){
        latestSafeCompiledDate = latestSafeCompiledDate.format("YYYY-MM-DD");
        admin.database().ref('/settings').update({latestSafeCompiledDate: latestSafeCompiledDate}).then(snapshot => {
          console.log("Latest safe compiled date successfully saved: " + latestSafeCompiledDate);
          res.send("Latest safe compiled date successfully saved: " + latestSafeCompiledDate);
        }).catch(function(error) {
          console.log("Error updating latest safe compiled date:", error);
          res.send("Error updating latest safe compiled date:", error);      
        });
      } else {
        console.log("Wrong date format");
        res.send("Wrong date format");
      }
      
    } else {
      console.log("Wrong token");
      res.send("Wrong token");
    }
  });  
 };