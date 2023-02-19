const showUsers = (room, usersInThisRoom, currentUser) => {
      console.log(" SSSSSSSSIIIIIIIIIIIGGGGGGGGGGUUUUUUUUUUEEEEEEEEEEE HHHHHHHHHHHHOOOOOOOOOOOOLLLLLLLLLLAAAAAAAA")

      // console.log("Han arribat aquestes dades a CLIENT/JOINNEWROOM:", room, "ARRAY:",usersInThisRoom, currentUser)
      try {
                  const usersInRoom = document.getElementById("usersList");
                  const newMessages = document.getElementById("newMessages");

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

            // if (sessionStorage.userName== user) {
            if (sessionStorage.userName== currentUser) {
                  // newMessages.style.display = "block";

                  console.log("DATOS A MOSTRAR DE LA ROM EN SHOWUSERS, EN EL CONDICIONAL", currentUser);
                  document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`
            };

            // document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`

      } catch (error) {
            return { status: "error", message: error };
      }

}

                  //! newMessages.style.display = "block";
                  // usersInRoom.innerHTML += `<span style='color: rgb(205, 111, 186);'>${currentUser}</span> <br>`
                  // document.getElementById("showCurrentRoom").innerHTML = `${room} <br>`
const showUserNewRoom = (room, currentUser) => {
      try {
            const usersInRoom = document.getElementById("usersList");
            // const newMessages = document.getElementById("newMessages");
            const dataMessage = document.getElementById("notificationRoom")
            usersInRoom.innerHTML = "";
            dataMessage.innerHTML = "";
            // console.log('USER:', user);
            console.log("DADES REBUDES A SHOWUSER NEW ROOM:", "room:", room, "usersInThisRoom:", "currentUser:", currentUser)
            console.log("SESSIONSTORAGE en PUBLIC/showusers:", sessionStorage)
            console.log(" ++++++++++*****--------SSSSSSSSIIIIIIIIIIIGGGGGGGGGGUUUUUUUUUUEEEEEEEEEEE HHHHHHHHHHHHOOOOOOOOOOOOLLLLLLLLLLAAAAAAAA")
            

            
            if (sessionStorage.userName !== currentUser.userName) {
                  console.log("AQUEST USUARI NO HA CREAT LA SALA")
                  
                  const message = `L'usuari ${currentUser.userName} ha creat la ROOM ${room}`;
                  dataMessage.innerHTML += message;
                  setTimeout(() => {
                    dataMessage.innerHTML = dataMessage.innerHTML.replace(message, "");
                  }, 5000); // 5000 milisegundos (5 segundos) de tiempo de espera
                  
            };


      } catch (error) {
            return { status: "error", message: error };
      };

};














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