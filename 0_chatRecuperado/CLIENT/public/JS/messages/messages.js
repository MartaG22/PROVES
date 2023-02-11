/* const showMessages = async (previousMessages) => {
// const showMessages = async (previousMessages, user) => {
      // console.log(previousMessages, "USER:", user, "USERS IN THIS ROOM:")
      // console.log("previousMessages:", previousMessages)
      const updateMissages = document.getElementById("oldMessages");
      updateMissages.innerHTML = "AQUIIIII PONGO LOS MENSAJESSS"


      
      // for (const message of previousMessages) {
      //       updateMissages.innerHTML += `<span style='color:#ff0000;'>${message.missatge}</span> <br>`
      //       // updateMissages.innerHTML += `<span style='color:#ff0000;'>${message.missatge}</span> <br>`


      //       // if (user === currentUser) {
      //       //       updateMissages.innerHTML += `<span style='color:#ff0000;'>${message}</span> <br>`

      //       // } else {
      //       //       usersInRoom.innerHTML += `${message} <br>`
      //       // };

      // };



            // console.log('USER:', user);
            // if (user === currentUser){
            //       usersInRoom.innerHTML += `<span style='color:#ff0000;'>${user}</span> <br>`
            //       // usersInRoom.innerHTML += `<strong>${user}</strong> <br>`
            //       // .style.setProperty("background-color", "#6ab150") `<br>`   //* PONER EL ESTILO DEL CURRENT USER AQUÍ !!!
            //       // ul.style.setProperty("background-color", "#6ab150"); 
            // } else {
            //       usersInRoom.innerHTML += `${user} <br>`
            // }
      // };


} */


const showMessages = async (previousMessages, currentUser, usersInThisRoom) => {
      try {

            console.log("previousMessages:", previousMessages, "currentUser:", currentUser, "usersInThisRoom:", usersInThisRoom)

            const updateMessages = document.getElementById("oldMessages");
            // updateMessages.innerHTML = "AQUIIIII PONGO LOS MENSAJESSS <br>"
            updateMessages.innerHTML = "";

            for (message of previousMessages) {
                  console.log("MESSAGE:", message);


                  if (currentUser.userName === message.nomUsuari) {
                        // updateMessages.innerHTML += `<strong>${currentUser.userName}: </strong>`;
                        // updateMessages.innerHTML += `<span style='color:#ff0000;'>${message.missatge}: </span><br>`;
                        updateMessages.innerHTML += `<span style = 'float: right'><strong>${currentUser.userName}: </strong style='color:#ff0000;'>${message.missatge}: </span> <br>`;


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
      // console.log("DADES REBUDES EN MESSAGES.JS/SENDMESSAGE", room, arrayUsers, currentUser)
      // const text = document.querySelector('.chat-form input[name="newMessage"]').value;
      try {
            const newMessageUser = document.querySelector('.xatForm input[name="newMessage"]').value;
            document.querySelector('.xatForm input[name="newMessage"]').value = ""
            console.log('newMessage', newMessageUser);

            // constr currentUser = {userId: sessionStorage.userId, userName: sessionStorage.userName};
            const room = { roomName: sessionStorage.roomName };

            console.log('room en PUBLIC/SENDMESSAGE', room);


            if (newMessageUser) {
                  socket.emit("newMessage", newMessageUser, room);

            }

      } catch (error) {
            return { status: "error", message: error };
      }

};

// const sendMessage = async (room, arrayUsers, currentUser) => {
// // const sendMessage = async (newMessage, usuari, curentRoom) => {
//       // console.log("DADES REBUDES EN MESSAGES.JS/SENDMESSAGE", room, arrayUsers, currentUser)
//       console.log("DADES REBUDES EN MESSAGES.JS/SENDMESSAGE", room, arrayUsers, currentUser);
//       // const text = document.querySelector('.chat-form input[name="newMessage"]').value;
//       // try {

//       //       const newMessageUser = document.querySelector('.xatForm input[name="newMessage"]').value;
//       //       document.querySelector('.xatForm input[name="newMessage"]').value = ""
//       //       console.log('newMessage', newMessageUser);

//       //       // constr currentUser = {userId: sessionStorage.userId, userName: sessionStorage.userName};
//       //       const room = {roomName: sessionStorage.roomName};

//       //       console.log('room en PUBLIC/SENDMESSAGE', room);


//       //       if (newMessageUser) {
//       //             socket.emit("newMessage", newMessageUser, room);

//       //       }
//       //       //! tiene que recibir el ok del BACK y mostralo por pnatalla
//       // } catch (error) {
//       //       return { status: "error", message: error };
//       // }

// };

const showNewMessage = async (newMessage, currentUser, room) => {
      try {
            console.log("DADES REBUDES EN CLIENTS/MESSAGES", newMessage, currentUser, room);
            // console.log("USUARI: ", usuari)
            const updateMessages = document.getElementById("oldMessages");

            // updateMessages.innerHTML += `<strong>${currentUser}: </strong>`;

            // updateMessages.innerHTML += newMessage.missatge;
            // console.log("SESSIONSTORAGE EN CLIENT/MESSAGES:", sessionStorage)

            // //! YA VA!!! TENGO QUE PONERLO COMO EL OTRO PARA QUE MUESTRE BIEN LOS MENSAJES NUEVOS
            // console.log('sessionStorage.userId EN CLIENT/MESSAGES:', sessionStorage.userId)
            // console.log('newMessage.idUsuari EN CLIENT/MESSAGES:', newMessage.idUsuari)
            // console.log('newMessage.nomUsuari EN CLIENT/MESSAGES:', newMessage.nomUsuari)
            // console.log('newMessage.missatge EN CLIENT/MESSAGES:', newMessage.missatge)

            if (sessionStorage.userId == newMessage.idUsuari) {
                  //! PONER LA CONDICIÓN CONN EL STORAGE
                  // console.log("SSSSIIIIIII - coinciden los IDs")
                  // updateMessages.innerHTML += `<strong>${newMessage.nomUsuari}: </strong>`;
                  // updateMessages.innerHTML += `<span style='color:#ff0000;'>${newMessage.missatge}: </span><br>`;
                  updateMessages.innerHTML += `<br><span  style = 'float: right;'<strong> ${newMessage.nomUsuari}: </strong><span style='color: #822252;'>${newMessage.missatge} </span> `;

            } else {
                  // console.log("NOOOOOOOO  - coinciden los IDs")
                  // updateMessages.innerHTML += `<strong>${newMessage.nomUsuari}: </strong>`
                  // updateMessages.innerHTML += `${newMessage.missatge} <br>`;
                  updateMessages.innerHTML += `<span style = 'float:left;'<strong>${newMessage.nomUsuari}: </strong>${newMessage.missatge} </span><br>`;

            };

            // updateMessages.innerHTML += newMessage;
            // "NUEVOS MENSAJES!!! <br>"

      } catch (error) {
            return { status: "error", message: error };
      }
}