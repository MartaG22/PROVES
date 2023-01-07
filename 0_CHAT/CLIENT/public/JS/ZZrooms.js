const joinRoom = (room) => {
      if (sessionStorage.roomId === room.roomId) return;
    
      socket.emit("join-room", room);
    
      sessionStorage.roomName = room.roomName;
      sessionStorage.roomId = room.roomId;
    
      document.getElementById("roomName").innerHTML = `Room: ${room.roomName}`;
    
      document.getElementById("messageList").innerHTML = "";
    
      document.getElementById("roomForm").newRoom.value = "";
      document.getElementById("messageForm").newMessage.value = "";
      document.getElementById("newMessage").focus();
    };
    
    const displayRoom = (room) => {
      const btn = document.createElement("button");
      if (room.roomName === "Main") {
        btn.classList.add("room-btn-active");
        joinRoom(room);
      }
    
      btn.textContent = room.roomName;
      btn.setAttribute("id", room.roomId);
      btn.classList.add("room-btn");
      btn.onclick = () => {
        if (sessionStorage.roomId) {
          document
            .getElementById(sessionStorage.roomId)
            .classList.remove("room-btn-active");
        }
    
        btn.classList.add("room-btn-active");
        joinRoom(room);
      };
    
      const rooms = document.getElementById("roomList");
      rooms.append(btn);
    
      sortBtnList("roomList");
    };
    
    const displayRoomUsers = (room, users) => {
      document.getElementById(
        room.roomId
      ).textContent = `${room.roomName} - users online ${users.length}`;
    };
    
    const createRoom = () => {
      const newRoomName = document.getElementById("roomForm").newRoom.value;
    
      if (newRoomName) {
        socket.emit("new-room", newRoomName);
        document.getElementById("roomForm").newRoom.value = "";
        joinRoom(newRoomName);
      } else {
        return false;
      }
    };