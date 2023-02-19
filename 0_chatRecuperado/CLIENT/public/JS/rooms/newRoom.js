const clickRoom = async (room) => {
      try {
            const newMessages = document.getElementById("newMessages");
            newMessages.style.display = "block";

            //! HE DE PONERLO PARA QUE LA MAIN SE PONGA TAMBIÉN EN EL STORAGE
            // console.log("1º- ROOOOOOOOOOM EN PUBLIC/CLICKROOM:", room.id)
            // console.log("1º- SESSIONSTORAGE EN PUBLIC/CLICKROOM:", sessionStorage)
      
            if (sessionStorage.roomName === room.id) return;
            sessionStorage.roomName = await room.id;
            console.log('2º- sessionStorage ROOM NUEVA:', sessionStorage.roomName)
            console.log("2º- SESSIONSTORAGE EN PUBLIC/CLICKROOM:", sessionStorage)

            document.getElementById("usersList").innerHTML = "";
            // document.getElementById("usersList").innerHTML = "p";

            //!  AQUÍ HE DE TREURE ELS USUARIS I LA ROOM ANTIGUES I ACTUALITZAR LES DADES D LA NOVA ROOM
            // socket.emit("joinRoom", sessionStorage.roomName);
            socket.emit("changeRoom", sessionStorage.roomName);
            
      } catch (error) {
            return { status: "error", message: error };
      };
};



const joinRoom = (room) => {
      try {

            // HE DE PONERLO PARA QUE LA MAIN SE PONGA TAMBIÉN EN EL STORAGE
            console.log("ROOOOOOOOOOM EN PUBLIC/JOINROOM:", room)
            console.log("SESSIONSTORAGE EN PUBLIC/JOINROOM:", sessionStorage)
      
            if (sessionStorage.roomName === room) return;
            sessionStorage.roomName = room;
            console.log('sessionStorage ROOM NUEVA:', sessionStorage.roomName)
            
            document.getElementById("usersList").innerHTML = "";

            //  AQUÍ HE DE TREURE ELS USUARIS I LA ROOM ANTIGUES I ACTUALITZAR LES DADES D LA NOVA ROOM
            socket.emit("joinNewRoom", sessionStorage.roomName);
            // socket.emit("prueba", sessionStorage.roomName);
            
      } catch (error) {
            return { status: "error", message: error };
      };
};

// const joinRoom = (room) => {
//       try {
//             console.log("ROOOOOOOOOOM EN PUBLIC/JOINROOM:", room)
//             if (sessionStorage.roomName === room.id) return;
//             if (room == "Main") {
//                   sessionStorage.roomName = room;
//             } else {

//                   sessionStorage.roomName = room.id;
//                   console.log('sessionStorage ROOM NUEVA:', sessionStorage.roomName)
//             }
                  
//                   document.getElementById("usersList").innerHTML = "";
                  
//                   //!  AQUÍ HE DE TREURE ELS USUARIS I LA ROOM ANTIGUES I ACTUALITZAR LES DADES D LA NOVA ROOM
//                   socket.emit("joinRoom", sessionStorage.roomName);
            
//       } catch (error) {
//             return { status: "error", message: error };
//       };
// };

const showRoom =  (rooms) => {
      try {

            const roomList =  document.getElementById("roomList");
            // const newMessages = document.getElementById("newMessages");
            roomList.innerHTML = "";
            // newMessages.innerHTML = `style.display: block;'`;


            // const newMessages = document.getElementById("newMessages");
            // newMessages.style.display = "block";
            // newMessages.style.display = "block";
            // `style='display: block;'`
            // usersInRoom.innerHTML += `<span style='color: rgb(205, 111, 186);'>${user}</span> <br>`

            for (const room of rooms) {
                  let btn = `<button class="room-btn-active" id="${room}" onClick="(() => {
                        console.log(' Li has donat a ${room}');
                        clickRoom(${room});  
                  
                  })()">${room}</button>`;
                  roomList.innerHTML += btn;
            }
      } catch (error) {
            return { status: "error", message: error };
      }
};



const createRoom = async () => {

      try {
            const newRoomName = await document.getElementById("roomForm").newRoomName.value;

            if (newRoomName) {
                  socket.emit("newRoom", newRoomName);
                  document.getElementById("roomForm").newRoom.value = "";
                  // joinRoom(newRoomName);

            } else {
                  return false;
            }
      } catch (error) {
            return { status: "error", message: error };
      }
};




const showNewRoom = async (room) => {
      try {
            const roomList =  document.getElementById("roomList");
            let btn = `<button class="room-btn-active" id="${room}">${room}</button>`;
            
            roomList.innerHTML += btn
            const button = document.getElementById(room);
            button.addEventListener("click", () => {
                  clickRoom(room);  

            //   console.log("¡El botón fue clicado!");
            });
      } catch (error) {
            return { status: "error", message: error };
      }

}
