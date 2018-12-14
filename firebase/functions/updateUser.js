exports.handler = (event,admin) => {	
  const newEmail = event.after.val()["email"];
  const prevEmail = event.before.val()["email"];
  if (newEmail !== prevEmail){
    admin.auth().getUserByEmail(prevEmail)
    .then(function(user) {
      const uid = user.uid;
      admin.auth().updateUser(uid,{
        email: `${newEmail}`,
      })
      .then(function(userRecord) {
        console.log("Successfully updated user:", userRecord.uid);
      })
      .catch(function(error) {
        console.log("Error updating user:", error);
      });
    })
  } 
}