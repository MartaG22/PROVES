if (!sessionStorage.token) {
      window.location.assign("index.html");
    }
    document.getElementById("userName").innerHTML = `${sessionStorage.userName}`;
    document.getElementById("messageList").innerHTML = "";
    document.getElementById("roomList").innerHTML = "";
    sessionStorage.roomId = "";
    sessionStorage.roomName = "";