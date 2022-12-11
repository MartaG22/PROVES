function login() {
    const user = document.getElementById("usuari").value;
    const password = document.getElementById("password").value;

    if(user == "Juan" && password == "1234") {
        window.location = "bienvenida.html";

    } else {
        alert("Datos incorrectos");
    }
     
}