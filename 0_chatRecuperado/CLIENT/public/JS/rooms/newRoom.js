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

const showRoom =  (rooms) => {
      try {

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
