const functions = require('firebase-functions');
const admin = require('firebase-admin');  
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

const APP_NAME = 'AD.MYSPORTS';
/*
  Require environment configuration, run following firebase command to set gmail.email and gmail.password values:
  $ firebase functions:config:set gmail.email="[SENDER EMAIL HERE]" gmail.password="[SENDER MAILBOX PASSWORD HERE]"
*/
exports.handler = event => {
  const user = event.data; 
  const email = user.email; 
  const displayName = user.displayName;

  console.log('New welcome email disabled, to:', email);
  return null;
  //return sendWelcomeEmail(email, displayName,user);
};

function sendWelcomeEmail(email, displayName,user)   {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email
  };
  var arr = JSON.stringify(user)
  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service. password ${arr}`;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New welcome email sent to:', email);
  });
}