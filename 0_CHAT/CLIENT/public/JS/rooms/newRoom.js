const joinRoom = (newRoomName) => {
      if (sessionStorage.roomId === newRoomName.roomId) return;  //! ESTO LO TENGO ATASCADO. NO SÉ DE DONDE SALE EL ROOMID

      socket.emit('joinRoom', newRoomName);
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
            return false; //! ???
      }
}