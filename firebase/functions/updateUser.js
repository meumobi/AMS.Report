exports.handler = (event,admin) => {	  	
  const userData = event.data;
  const emailPrev = event.data.previous.child("email");
  const id = event.params.id;
  const email = userData.child("email");
  if (email.changed()){
    admin.auth().getUserByEmail(emailPrev.val())
    .then(function(user) {
      const uid = user.uid;
      admin.auth().updateUser(uid,{
        email: `${email.val()}`,
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