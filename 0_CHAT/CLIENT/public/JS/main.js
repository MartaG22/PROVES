if (!sessionStorage.token) {
    window.location.assign("login.html");
}

document.getElementById("userName").innerHTML = `${sessionStorage.userName}`; //! Aquest és el nom de l'usuari connectat!!
// document.getElementById("messageList").innerHTML = "";
// document.getElementById("roomList").innerHTML = "";  //! Aquí està el llistat de les ROOMS 
sessionStorage.roomId = "";
sessionStorage.roomName = "";
