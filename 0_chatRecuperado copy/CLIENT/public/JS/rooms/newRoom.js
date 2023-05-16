const joinNewRoom = (room) => {
      console.log("ROOOOOOOOOOM EN PUBLIC/JOINROOM:", room)
      if (sessionStorage.roomName === room.id) return;
      sessionStorage.roomName = room;
      console.log("SESSIONSTORAG.ROOMNAME EN CLIENT/JOINNEWROOM", sessionStorage.roomName)
}



const joinRoom = (room) => {
      try {

            if (sessionStorage.roomName === room.id) return;
            sessionStorage.roomName = room.id;
            console.log('sessionStorage ROOM NUEVA:', sessionStorage.roomName)
            
            document.getElementById("usersList").innerHTML = "";

            //!  AQUÍ HE DE TREURE ELS USUARIS I LA ROOM ANTIGUES I ACTUALITZAR LES DADES D LA NOVA ROOM
            socket.emit("joinRoom", sessionStorage.roomName);
            
      } catch (error) {
            return { status: "error", message: error };
      };
};






/* const joinRoom = (room) => {
      try {

            //! HE DE PONERLO PARA QUE LA MAIN SE PONGA TAMBIÉN EN EL STORAGE
            console.log("ROOOOOOOOOOM EN PUBLIC/JOINROOM:", room)
      
            if (sessionStorage.roomName === room.id) return;
            // if (room == "Main") {sessionStorage.roomName = room};

// console.log("ROOM.ID:", room.id)
            sessionStorage.roomName = room;
            console.log('sessionStorage ROOM NUEVA:', sessionStorage.roomName)
            
            document.getElementById("usersList").innerHTML = "";
            console.log('sessionStorage.roomName antes de enviar a JOINNEWRPOM en join', sessionStorage.roomName)
            //!  AQUÍ HE DE TREURE ELS USUARIS I LA ROOM ANTIGUES I ACTUALITZAR LES DADES D LA NOVA ROOM
            socket.emit("joinNewRoom", sessionStorage.roomName);
            
      } catch (error) {
            return { status: "error", message: error };
      };
};




 */// const joinRoom = (room) => {
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
            console.log("-<>.-.<>-.-<>.- ROOMS EN PUBLIC/NEWROOM/SHOWROOM", rooms)
            const roomList =  document.getElementById("roomList");
            roomList.innerHTML = "";


            for (const room of rooms) {
                  let btn = `<button class="room-btn-active" id="${room}" onClick="(() => {
                        console.log(' Li has donat a ${room}');
                        joinRoom(${room});  
                  })()">${room}</button>`;
                  roomList.innerHTML += btn;
                  
            }
      } catch (error) {
            return { status: "error", message: error };
      }
};
                        // joinRoom(${room});  



const createRoom = async () => {

      try {
            const newRoomName = await document.getElementById("roomForm").newRoomName.value;

            if (newRoomName) {
                  socket.emit("newRoom", newRoomName);
                  document.getElementById("roomForm").newRoom.value = "";
                  joinRoom(newRoomName);

            } else {
                  return false;
            }
      } catch (error) {
            return { status: "error", message: error };
      }
};
