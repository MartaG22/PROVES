const showUsers = (room, usersInThisRoom, currentUser) => {
      console.log(" SSSSSSSSIIIIIIIIIIIGGGGGGGGGGUUUUUUUUUUEEEEEEEEEEE HHHHHHHHHHHHOOOOOOOOOOOOLLLLLLLLLLAAAAAAAA")

      // console.log("Han arribat aquestes dades a CLIENT/JOINNEWROOM:", room, "ARRAY:",usersInThisRoom, currentUser)



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
                  } else if (sessionStorage.userName !== user) {
                        usersInRoom.innerHTML += `${user} <br>`
                  }
            };


            if (sessionStorage.userName== currentUser) {
                  console.log("DATOS A MOSTRAR DE LA ROM EN SHOWUSERS, EN EL CONDICIONAL", currentUser);
                  document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`
            };

            // document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`

      } catch (error) {
            return { status: "error", message: error };
      }

}

















//       console.log("DADES REBUDES EN CLIENTS/SHOWUSERS", room, usersInThisRoom, currentUser);
//       try {
//             const usersInRoom = document.getElementById("usersList");
//             usersInRoom.innerHTML = "";

//             for (const user of usersInThisRoom) {
//                   console.log('USER:', user);
//                   console.log("SESSIONSTORAGE en PUBLIC/showusers:", sessionStorage)
//                   // if (user === currentUser){
//                   // if (user === currentUser){
//                   if (sessionStorage.userName === user) {
//                         usersInRoom.innerHTML += `<span style='color: rgb(205, 111, 186);'>${user}</span> <br>`
//                         // document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`
//                   } else if (sessionStorage.userName !== user) {
//                         usersInRoom.innerHTML += `<span${user}<span> <br>`
//                   }
//             };
            
//             if (sessionStorage.userName== currentUser) {
//                   console.log("DATOS A MOSTRAR DE LA ROM EN SHOWUSERS, EN EL CONDICIONAL", currentUser);
//                   document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`
//             };

//       } catch (error) {
//             return { status: "error", message: error };
//       };
// };




const showUsersChangeRoom = (room, usersInThisRoom, currentUser) => {

      try {
            const usersInRoom = document.getElementById("usersList");
            usersInRoom.innerHTML = "";

            for (const user of usersInThisRoom) {

                  if (sessionStorage.userName === user) {
                        usersInRoom.innerHTML += `<span style='color: rgb(205, 111, 186);'>${user}</span> <br>`
                  } 
            };

            document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`

      } catch (error) {
            return { status: "error", message: error };
      }

}