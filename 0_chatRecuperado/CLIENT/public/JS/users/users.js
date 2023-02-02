const showUsers = (room, usersInThisRoom, currentUser) => {

      try {
            // console.log("room en SHOWUSERS:", room);
            // console.log("arrayUsers en SHOWUSERs", arrayUsers);
            const usersInRoom = document.getElementById("usersList");
            // console.log(arrayUsers[0], arrayUsers[1], arrayUsers[2])
            // usersInRoom.innerHTML = arrayUsers;
            console.log( "LLEGA A PUBLIC/SHOWUSERS:", room, usersInThisRoom, currentUser);


            for (const user of usersInThisRoom) {
                  console.log('USER:', user);
                  if (user === currentUser){
                        usersInRoom.innerHTML += `${user} <br>`
                        // .style.setProperty("background-color", "#6ab150") `<br>`   //* PONER EL ESTILO DEL CURRENT USER AQUÍ !!!
                        // ul.style.setProperty("background-color", "#6ab150"); 
                  } else {
                        usersInRoom.innerHTML += `${user} <br>`
                  }
            };
            document.getElementById("showCurrentRoom").innerHTML += `${room} <br>`



      } catch (error) {
            return { status: "error", message: error };
      }

}