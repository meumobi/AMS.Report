exports.handler = (event,admin) => {
  console.log(event);
  const email = event.val()["email"];
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
};