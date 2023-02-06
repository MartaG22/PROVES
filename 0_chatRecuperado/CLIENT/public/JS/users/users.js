const showUsers = (room, usersInThisRoom, currentUser) => {

// const showUsers = (room, usersInThisRoom, currentUser, previousMessages) => {
      // console.log( "LLEGA A PUBLIC/SHOWUSERS:", room, usersInThisRoom, currentUser, previousMessages);

      try {
            // console.log("room en SHOWUSERS:", room);
            // console.log("arrayUsers en SHOWUSERs", arrayUsers);
            const usersInRoom = document.getElementById("usersList");
            //? const updateMissages = document.getElementById("previousMessages");
            // console.log(arrayUsers[0], arrayUsers[1], arrayUsers[2])
            // usersInRoom.innerHTML = arrayUsers;
            // console.log( "LLEGA A PUBLIC/SHOWUSERS:", room, usersInThisRoom, currentUser);
            console.log( "LLEGA A PUBLIC/SHOWUSERS:", room, usersInThisRoom, currentUser);



            for (const user of usersInThisRoom) {
                  console.log('USER:', user);
                  if (user === currentUser){
                        usersInRoom.innerHTML += `<span style='color:#ff0000;'>${user}</span> <br>`
                        // usersInRoom.innerHTML += `<strong>${user}</strong> <br>`
                        // .style.setProperty("background-color", "#6ab150") `<br>`   //* PONER EL ESTILO DEL CURRENT USER AQUÍ !!!
                        // ul.style.setProperty("background-color", "#6ab150"); 
                  } else {
                        usersInRoom.innerHTML += `${user} <br>`
                  }
            };
            // document.getElementById("showCurrentRoom").innerHTML += `${room} <br>`
            document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`

            // for (const message of updateMissages) {
            //       console.log("GET MESSAGE:", message);
            // }


      } catch (error) {
            return { status: "error", message: error };
      }

}