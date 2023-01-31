const showUsers = (room, arrayUsers, currentUser) => {
      try {
            // console.log("room en SHOWUSERS:", room);
            // console.log("arrayUsers en SHOWUSERs", arrayUsers);
            const usersInRoom = document.getElementById("usersList");
            // console.log(arrayUsers[0], arrayUsers[1], arrayUsers[2])
            // usersInRoom.innerHTML = arrayUsers;
            

            for (const user of arrayUsers) {
                  console.log('USER:', user);
                  if (user === currentUser){
                        usersInRoom.innerHTML += `${user} <br>`   //* PONER EL ESTILO DEL CURRENT USER AQUÍ !!!

                  } else {
                        usersInRoom.innerHTML += `${user} <br>`
                  }
            };
            document.getElementById("showCurrentRoom").innerHTML += `${room} <br>`



      } catch (error) {
            return { status: "error", message: error };
      }

}