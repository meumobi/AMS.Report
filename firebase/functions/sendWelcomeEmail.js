const nodemailer = require('nodemailer');
/*
  Require environment configuration, run following firebase command to set gmail.email and gmail.password values:
  $ firebase functions:config:set gmail.email="[SENDER EMAIL HERE]" gmail.password="[SENDER MAILBOX PASSWORD HERE]"
  
  To turn on run:
  $ firebase functions:config:set send_welcome_email.enabled=true
  To turn off:
  $ firebase functions:config:set send_welcome_email.enabled=false 

*/
exports.handler = (event,functions) => {
  console.log(event);
  const user = event;
  const email = user["email"];  
  const enabled = functions.config().send_welcome_email.enabled;
  if (enabled == "true"){
    const displayName = user["displayName"];
    return sendWelcomeEmail(email, displayName, user, functions);
  } else {
    console.log('New user welcome email disabled, to:', email);
    return null;
  }  
};

function sendWelcomeEmail(email, displayName, user, functions)   {
  const gmailEmail = encodeURIComponent(functions.config().gmail.email);
  const gmailPassword = encodeURIComponent(functions.config().gmail.password);
  const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
  const APP_NAME = 'AD.MYSPORTS';
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email
  };
  var arr = JSON.stringify(user)
  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New user welcome email sent to:', email);
  });
}