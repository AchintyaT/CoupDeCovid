const validate = () => {
    var e = document.getElementById("E-mail").value;
    var p = document.getElementById("psword").value;
    auth.signInWithEmailAndPassword(e, p).then(function() {
        var d = "Hello " + e + "!";
        swal("User Authenticated", d, "success")
        setTimeout(() => {
            document.getElementById("d1").style.display = 'none';
            document.getElementById("info").style.display = 'block';
        }, 3000);
    });
}
const register = () => {
    document.getElementById("d1").style.display = 'none';
    document.getElementById('d2').style.display = 'block';
}