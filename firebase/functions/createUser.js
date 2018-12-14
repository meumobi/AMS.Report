exports.handler = (event,admin) => {
  const userData = event.val();
  const id = event.key;
  const email = userData["email"];
  const password = userData["password"];
  admin.auth().createUser({
    email: `${email}`,
    emailVerified: true,
    password: `${password}`,
    disabled: false
  })
  .then(function(userRecord) {
    console.log("Successfully created new user:", userRecord.uid);
  })
  .catch(function(error) {
    console.log("Error creating new user:", error);
  });
}