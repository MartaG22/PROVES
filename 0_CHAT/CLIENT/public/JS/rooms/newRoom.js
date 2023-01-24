const joinRoom = (newRoomName) => {
      if (sessionStorage.roomId === newRoomName.roomId) return;

      socket.emit('joinRoom', newRoomName);
}

const showRoom = (room) => {
      console.log(room);
      const btn = document.createElement("button");

      // buttonRooms.innerHTML = room;
      btn
      btn.classList.add("room-btn-active");
      btn.textContent = room;
      btn.setAttribute("id", room);
      btn.onclick = () => {
            //! FALTAN COSAS
            console.log(` Li has donat a ${room}`)
            joinRoom(room);
      }
      const roomList = document.getElementById("roomList");
      roomList.append(btn);
      // joinRoom(room)
}

const createRoom = () => {
      // const newRoomUser = document.getElementById("roomForm").newRoomName.value;
      // console.log(newRoomUser);
      
      const newRoomName = document.getElementById("roomForm").newRoomName.value;
      console.log(newRoomName);

      if (newRoomName) {
            socket.emit('newRoom', newRoomName);
            document.getElementById('roomForm').newRoom.value = "";
            joinRoom(newRoomName)
            // document.getElementById('newRoomName').value = "";

      } else {
            return false; 
      };
};