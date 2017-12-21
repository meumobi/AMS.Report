var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAMgveLSEddhYw7VBBYz_oxvoND0nc12Kw",
  authDomain: "ams-report-test.firebaseapp.com",
  databaseURL: "https://ams-report-test.firebaseio.com",
  projectId: "ams-report-test",
  storageBucket: "ams-report-test.appspot.com",
  messagingSenderId: "452558743407",
};

firebase.initializeApp(config);

var ref = firebase.database().ref('/');
var reportsRef = ref.child('reports');

const reportByKey = reportsRef.child('2017-12-01_actu rugby_rubicon').on('value', function(snap) {
  console.log(snap.val());
})

/*
reportsRef.on('child_removed', function (snap) {
  console.log(snap.val());
})

reportsRef.orderByChild('date').equalTo('2017-12-13').once('value', function(snap) {
  console.log(snap.val());
  //snap.ref.remove();
});
*/