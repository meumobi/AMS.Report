var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyBML2EVs0juvq3wJsjs3gYU-qHJAEu9UiA",
  authDomain: "ams-report.firebaseapp.com",
  databaseURL: "https://ams-report.firebaseio.com",
  projectId: "ams-report",
  storageBucket: "ams-report.appspot.com",
  messagingSenderId: "832063717167"
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