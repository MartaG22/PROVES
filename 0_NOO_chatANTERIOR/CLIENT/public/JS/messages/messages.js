const showMessages = async (previousMessages, currentUser, usersInThisRoom) => {
      console.log(
            "previousMessages:",
            previousMessages,
            "currentUser:",
            currentUser,
            "usersInThisRoom:",
            usersInThisRoom
      );

      const updateMessages = document.getElementById("oldMessages");

      for (message of previousMessages) {
            console.log("MESSAGE:", message);

            if (currentUser.userName === message.nomUsuari) {
                  // updateMessages.innerHTML += `<strong>${currentUser.userName}: </strong>`;
                  // updateMessages.innerHTML += `<span style='color:#ff0000;'>${message.missatge}: </span><br>`;
                  updateMessages.innerHTML += `<span style = 'float: right'><strong>${currentUser.userName}: </strong style='color:#ff0000;'>${message.missatge}: </span> <br>`;

                  // updateMessages.innerHTML += `<span style='float:right;<strong>${currentUser.userName}: </strong> style='color:#ff0000;'${message.missatge}: ></span><br>`;

                  // updateMessages.innerHTML += `<span style='float:right;'<strong>${newMessage.nomUsuari}: </strong><span style='color:#ff0000;'>${newMessage.missatge} </span><br>`;
            } else {
                  // updateMessages.innerHTML += `<strong>${message.nomUsuari}: </strong>`;
                  // updateMessages.innerHTML += `${message.missatge} <br>`;
                  updateMessages.innerHTML += `<span style = 'float: left;'><strong>${message.nomUsuari}: </strong>${message.missatge}</span> <br>`;

            }
      }
};


const sendMessage = async () => {
      // console.log("DADES REBUDES EN MESSAGES.JS/SENDMESSAGE", room, arrayUsers, currentUser)
      // const text = document.querySelector('.chat-form input[name="newMessage"]').value;
      try {
            const newMessageUser = document.querySelector(
                  '.xatForm input[name="newMessage"]'
            ).value;
            document.querySelector('.xatForm input[name="newMessage"]').value = "";
            console.log("newMessage", newMessageUser);

            // constr currentUser = {userId: sessionStorage.userId, userName: sessionStorage.userName};
            const room = { roomName: sessionStorage.roomName };

            console.log("room en PUBLIC/SENDMESSAGE", room);

            if (newMessageUser) {
                  socket.emit("newMessage", newMessageUser, room);
            }
      } catch (error) {
            return { status: "error", message: error };
      }
};


const showNewMessage = async (newMessage, currentUser, room) => {
      try {
            console.log(
                  "DADES REBUDES EN CLIENTS/MESSAGES",
                  newMessage,
                  currentUser,
                  room
            );
            // console.log("USUARI: ", usuari)
            const updateMessages = document.getElementById("oldMessages");

            // updateMessages.innerHTML += `<strong>${currentUser}: </strong>`;

            // updateMessages.innerHTML += newMessage.missatge;
            // console.log("SESSIONSTORAGE EN CLIENT/MESSAGES:", sessionStorage)


            if (sessionStorage.userId == newMessage.idUsuari) {
                  // console.log("SSSSIIIIIII - coinciden los IDs")
                  // updateMessages.innerHTML += `<strong>${newMessage.nomUsuari}: </strong>`;
                  // updateMessages.innerHTML += `<span style='color:#ff0000;'>${newMessage.missatge}: </span><br>`;
                  // updateMessages.innerHTML += `<span style='float:right;'<strong>${newMessage.nomUsuari}: </strong><span style='color:#ff0000;'>${newMessage.missatge} </span> <br>`;
                  updateMessages.innerHTML += `<br><span  style = 'float: right;'<strong> ${newMessage.nomUsuari}: </strong><span style='color: #822252;'>${newMessage.missatge} </span> `;
                  // color: rgb(205, 111, 186);

            } else {
                  // console.log("NOOOOOOOO  - coinciden los IDs")
                  // updateMessages.innerHTML += `<strong>${newMessage.nomUsuari}: </strong>`;
                  // updateMessages.innerHTML += `${newMessage.missatge} <br>`;
                  updateMessages.innerHTML += `<span style = 'float:left;'<strong>${newMessage.nomUsuari}: </strong>${newMessage.missatge} </span><br>`;
            }

            // updateMessages.innerHTML += newMessage;
            // "NUEVOS MENSAJES!!! <br>"
      } catch (error) {
            return { status: "error", message: error };
      }
};
