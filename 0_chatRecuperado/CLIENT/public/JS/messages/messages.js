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


const showMessages = async(previousMessages, currentUser, usersInThisRoom) => {
      console.log("previousMessages:", previousMessages, "currentUser:", currentUser, "usersInThisRoom:", usersInThisRoom)

      const updateMissages = document.getElementById("oldMessages");
      updateMissages.innerHTML = "AQUIIIII PONGO LOS MENSAJESSS <br>"

      for (message of previousMessages) {
            console.log("MESSAGE:", message);


            if (currentUser.userName === message.nomUsuari) {
                  updateMissages.innerHTML += `<strong>${currentUser.userName}: </strong>`;
                  updateMissages.innerHTML += `<span style='color:#ff0000;'>${message.missatge}: </span><br>`;
                  
            } else {
                  updateMissages.innerHTML += `<strong>${message.nomUsuari}: </strong>`
                  updateMissages.innerHTML += `${message.missatge} <br>`;
                  
            };
      };
};




const sendMessage = async (room, arrayUsers, currentUser) => {
// const sendMessage = async (newMessage, usuari, curentRoom) => {
      // console.log("DADES REBUDES EN MESSAGES.JS/SENDMESSAGE", room, arrayUsers, currentUser)
      console.log("DADES REBUDES EN MESSAGES.JS/SENDMESSAGE", room, arrayUsers, currentUser);
      // const text = document.querySelector('.chat-form input[name="newMessage"]').value;
      // try {
            
      //       const newMessageUser = document.querySelector('.xatForm input[name="newMessage"]').value;
      //       document.querySelector('.xatForm input[name="newMessage"]').value = ""
      //       console.log('newMessage', newMessageUser);
            
      //       // constr currentUser = {userId: sessionStorage.userId, userName: sessionStorage.userName};
      //       const room = {roomName: sessionStorage.roomName};
            
      //       console.log('room en PUBLIC/SENDMESSAGE', room);
            

      //       if (newMessageUser) {
      //             socket.emit("newMessage", newMessageUser, room);
                  
      //       }
      //       //! tiene que recibir el ok del BACK y mostralo por pnatalla
      // } catch (error) {
      //       return { status: "error", message: error };
      // }
      
};




const displayNewMessage = async (newMessage, usuari, room) => {

      

}