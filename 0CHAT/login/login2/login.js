// https://www.youtube.com/watch?v=C8xJyQGe6RA

function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    // alert(`Validando función + ${user} + ${pass}`);

    let usuario = "Marta";
    let password = "1234";
    if(user == usuario && pass == password) {
        alert ("Bienvenido al sistema: " + usuario);
        location.replace('.');

    } else if (user == "" || pass == "") {
        alert ("Por favor, introduce los datos requeridos");
    } else {
        alert ("Usuario y/o contraseña no válidos");
    }
    
    
}

// //! ESTO ES PARA CAMBIAR A OTRA PÁGINA, DEL INICIO AL LOGIN Y DEL LOGIN A LA DEL XAT
// https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=859:javascript-redireccionar-y-recargar-webs-windowlocation-href-hostname-assign-reload-replace-cu01171e&catid=78&Itemid=206
// https://www.youtube.com/watch?v=MYqpw0P31ms
// https://www.youtube.com/watch?v=RgUVG3BgWpQ

// <script>
// location.replace('https://pablomonteserin.com');
// </script>

