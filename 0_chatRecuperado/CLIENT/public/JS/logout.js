document.querySelector('.logout-button').addEventListener('click', () => {
    console.log("ESTIC EN LOGOUT per DESCONNECAR USER")
      const leaveRoom = confirm("Vols desconnectar?");
      if(leaveRoom){
          sessionStorage.clear();
          window.location.replace("./login.html");
      }
  })
