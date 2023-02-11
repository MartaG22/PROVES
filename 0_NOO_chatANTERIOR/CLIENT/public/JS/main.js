if (!sessionStorage.token) {
    window.location.assign("login.html");
}

document.getElementById("userName").innerHTML = `${sessionStorage.userName}`; //! Aquest és el nom de l'usuari connectat!!
// document.getElementById("messageList").innerHTML = "";
document.getElementById("roomList").innerHTML = "";  //! Aquí està el llistat de les ROOMS 
sessionStorage.roomId = "";
sessionStorage.roomName = "";


//* https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
//* Per preveure que el button del Fromulari del XATFORM recarregui la pàgina per defecte i cridi a la funció SENDMESSAGE
document.querySelector('.xatForm').addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      sendMessage()
    }
  });