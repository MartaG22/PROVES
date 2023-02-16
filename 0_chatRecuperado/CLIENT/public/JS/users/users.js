const showUsers = (room, usersInThisRoom, currentUser) => {
      console.log(" SSSSSSSSIIIIIIIIIIIGGGGGGGGGGUUUUUUUUUUEEEEEEEEEEE HHHHHHHHHHHHOOOOOOOOOOOOLLLLLLLLLLAAAAAAAA")

      // console.log("Han arribat aquestes dades a CLIENT/JOINNEWROOM:", room, "ARRAY:",usersInThisRoom, currentUser)

      // console.log("DADES REBUDES EN CLIENTS/SHOWUSERS", room, usersInThisRoom, currentUser);
      try {
            const usersInRoom = document.getElementById("usersList");
            usersInRoom.innerHTML = "";

            for (const user of usersInThisRoom) {
                  console.log('USER:', user);
                  console.log("SESSIONSTORAGE en PUBLIC/showusers:", sessionStorage)
                  // if (user === currentUser){
                  // if (user === currentUser){
                  if (sessionStorage.userName === user) {
                        usersInRoom.innerHTML += `<span style='color: rgb(205, 111, 186);'>${user}</span> <br>`
                  } else {
                        usersInRoom.innerHTML += `${user} <br>`
                  }
            };

            document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`

      } catch (error) {
            return { status: "error", message: error };
      }

}