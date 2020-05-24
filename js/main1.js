 var save = () => {
     let name = document.getElementById("name").value;
     let email = document.getElementById("Email").value;
     let password = document.getElementById("password").value;
     let cpas = document.getElementById("cpas").value;

     if (password !== cpas) {
         alert("Please Enter the correct password");
     } else {
         auth.createUserWithEmailAndPassword(email, password).then(cred => {
             // close the signup modal & reset form

             document.getElementById("d2").style.display = 'none';
             document.getElementById('info').style.display = 'block';
         });
     };
     // logout

 }