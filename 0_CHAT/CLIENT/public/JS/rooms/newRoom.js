const joinRoom = (newRoomName) => {
      if (sessionStorage.roomId === newRoomName.roomId) return;

      socket.emit('joinRoom', newRoomName);
}

// const showRoom = (room) => {
//       console.log(room);
//       joinRoom(room)
// }

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
            return false; //! ???
      }
}