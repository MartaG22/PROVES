const newRoom = () => {
      const newRoomUser = document.getElementById("newRoomName").value;
      console.log(newRoomUser);

      if (newRoomUser) {
            socket.emit('newRoom', newRoomUser);
            document.getElementById('newRoomName').value = "";

      } else {
            return false; //! ???
      }
}