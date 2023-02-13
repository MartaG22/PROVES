const showMessages = (previousMessages, currentUser, usersInThisRoom) => {
      try {

            console.log("previousMessages:", previousMessages, "currentUser:", currentUser, "usersInThisRoom:", usersInThisRoom)
            
            const updateMessages = document.getElementById("oldMessages");
            updateMessages.innerHTML = "";
            
            for (message of previousMessages) {
                  console.log("MESSAGE:", message);
                  
                  if (currentUser.userName === message.nomUsuari) {
                        // updateMessages.innerHTML += `<strong>${currentUser.userName}: </strong>`;
                        // updateMessages.innerHTML += `<span style='color:#ff0000;'>${message.missatge}: </span><br>`;
                        updateMessages.innerHTML += `<span style = 'float: right'><strong>${currentUser.userName}: </strong><span style='color:#ff0000;'>${message.missatge} </span> `;
                        updateMessages.innerHTML += '<br>';
                        // updateMessages.innerHTML += `<br><span style = 'float: right'><strong>${currentUser.userName}: </strong><span style=" font-family: 'Crafty Girls', cursive;">${message.missatge} </span><br></br>`;
                        // font-family: 'Crafty Girls', cursive;


                  } else {
                        // updateMessages.innerHTML += `<strong>${message.nomUsuari}: </strong>`
                        // updateMessages.innerHTML += `${message.missatge} <br>`;
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
            console.log('newMessage', newMessageUser);
            
            // constr currentUser = {userId: sessionStorage.userId, userName: sessionStorage.userName};
            const room = {roomName: sessionStorage.roomName};
            
            console.log('room en PUBLIC/SENDMESSAGE', room);
            
            if (newMessageUser) {
                  socket.emit("newMessage", newMessageUser, room);
            }

      } catch (error) {
            return { status: "error", message: error };
      }
};


const showNewMessage = async (newMessage, currentUser, room) => {
      try {
            console.log("DADES REBUDES EN CLIENTS/MESSAGES", newMessage, currentUser, room);
            const updateMessages = document.getElementById("oldMessages");

            if (sessionStorage.userId == newMessage.idUsuari) {
                  //! PONER LA CONDICIÓN CONN EL STORAGE
                  // updateMessages.innerHTML += `<strong>${newMessage.nomUsuari}: </strong>`;
                  // updateMessages.innerHTML += `<span style='color:#ff0000;'>${newMessage.missatge}: </span><br>`;
                  updateMessages.innerHTML += `<br><span  style = 'float: right;'><strong> ${newMessage.nomUsuari}: </strong><span style='color: #822252;'>${newMessage.missatge} </span> `;

            } else {
                  // updateMessages.innerHTML += `<strong>${newMessage.nomUsuari}: </strong>`
                  // updateMessages.innerHTML += `${newMessage.missatge} <br>`;
                  updateMessages.innerHTML += `<br><span style = 'float:left;'><strong>${newMessage.nomUsuari}: </strong>${newMessage.missatge} </span>`;

            };
            
      } catch (error) {
            return { status: "error", message: error };
      }
}