const createRoom = () => {
      // const newRoomUser = document.getElementById("roomForm").newRoomName.value;
      // console.log(newRoomUser);
      
      const newRoomName = document.getElementById("roomForm").newRoomName.value;
      console.log(newRoomName);

      if (newRoomName) {
            socket.emit('newRoom', newRoomName);
            // document.getElementById('newRoomName').value = "";

      } else {
            return false; //! ???
      }
}