// https://www.youtube.com/watch?v=C8xJyQGe6RA

function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    // alert(`Validando función + ${user} + ${pass}`);

    let usuario = "Marta";
    let password = "1234";
    if(user == usuario && pass == password) {
        alert ("Bienvenido al sistema: " + usuario);
    } else if (user == "" || pass == "") {
        alert ("Por favor, introduce los datos requeridos");
    } else {
        alert ("Usuario y/o contraseña no válidos");
    }
    
    
}

// //! ESTO ES PARA CAMBIAR A OTRA PÁGINA, DEL INICIO AL LOGIN Y DEL LOGIN A LA DEL XAT
// <script>
// location.replace('https://pablomonteserin.com');
// </script>