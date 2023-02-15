const showMessages = (previousMessages, currentUser, usersInThisRoom) => {
      try {

            const updateMessages = document.getElementById("oldMessages");
            updateMessages.innerHTML = "";
            
            for (message of previousMessages) {
                  console.log("MESSAGE:", message);
                  
                  if (currentUser.userName === message.nomUsuari) {
                        updateMessages.innerHTML += `<span style = 'float: right'><strong>${currentUser.userName}: </strong><span style='color:#ff0000;'>${message.missatge} </span> `;
                        updateMessages.innerHTML += '<br>';


                  } else {
                        updateMessages.innerHTML += `<span style = 'float: left;'><strong>${message.nomUsuari}: </strong>${message.missatge}</span> <br>`;
                  };
            };
      } catch (error) {
            return { status: "error", message: error };
      }
};

const sendMessage = async () => {
      try {
            const newMessageUser = document.querySelector('.xatForm input[name="newMessage"]').value;
            document.querySelector('.xatForm input[name="newMessage"]').value = ""
            const room = {roomName: sessionStorage.roomName};
            
            if (newMessageUser) {
                  socket.emit("newMessage", newMessageUser, room);
            }

      } catch (error) {
            return { status: "error", message: error };
      }
};


const showNewMessage = async (newMessage, currentUser, room) => {
      try {
            const updateMessages = document.getElementById("oldMessages");

            if (sessionStorage.userId == newMessage.idUsuari) {
                  updateMessages.innerHTML += `<br><span  style = 'float: right;'><strong> ${newMessage.nomUsuari}: </strong><span style='color: #822252;'>${newMessage.missatge} </span> `;

            } else {
                  updateMessages.innerHTML += `<br><span style = 'float:left;'><strong>${newMessage.nomUsuari}: </strong>${newMessage.missatge} </span>`;

            };
            
      } catch (error) {
            return { status: "error", message: error };
      }
}