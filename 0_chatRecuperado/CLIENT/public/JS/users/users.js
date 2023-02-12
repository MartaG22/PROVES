const showUsers = (room, usersInThisRoom, currentUser) => {

      try {
            const usersInRoom = document.getElementById("usersList");
            usersInRoom.innerHTML = "";

            for (const user of usersInThisRoom) {
                  console.log('USER:', user);
                  if (user === currentUser){
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