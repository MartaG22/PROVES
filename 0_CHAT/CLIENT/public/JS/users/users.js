const showUsers = (room, arrayUsers) => {
      try {
            console.log("room en SHOWUSERS:", room);
            console.log("arrayUsers en SHOWUSERs", arrayUsers);
            const usersInRoom = document.getElementById("usersList");

            // usersInRoom.innerHTML = arrayUsers;


            const usersCount = arrayUsers.lenght;
console.log(usersCount)
            
            for ( let i = 0; i < usersCount; i++) {

                  console.log('USER:', arrayUsers[i]);
                  usersInRoom.innerHTML = "user"

            }
            

            // for (const user of arrayUsers) {
            //       console.log('USER:', user);
            //       usersInRoom.innerHTML = "user"
                  
            // }

            //! NO ENSEÑA TODOS LOS USERS!!!
            // arrayUsers.forEach(user => {
            //       console.log('USER:', user);
            //       // usersList.innerHTML += user

            // });


      } catch (error) {
            return { status: "error", message: error };
      }

}