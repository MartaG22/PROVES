const joinRoom = (room) => {
      try {
            // const usersInRoom = document.getElementById("usersList");
            // const updateMissages = document.getElementById("previousMessages");

            if (sessionStorage.roomName === room.id) return;
            // console.log(room)
            sessionStorage.roomName = room.id;
            // sessionStorage.roomId = room.roomId;
            console.log('sessionStorage ROOM NUEVA:', sessionStorage.roomName)
            // console.log("ROOM en newROOM", room.id);
            
            // usersInRoom.innerHTML = "";
            document.getElementById("usersList").innerHTML = "";
            // document.getElementById("showCurrentRoom").innerHTML = "";

            //!  AQUÍ HE DE TREURE ELS USUARIS I LA ROOM ANTIGUES I ACTUALITZAR LES DADES D LA NOVA ROOM
            socket.emit("joinRoom", sessionStorage.roomName);


            
      } catch (error) {
            return { status: "error", message: error };
      };
};

const showRoom =  (rooms) => {
      try {
            // console.log("ROOOOOMMMSSSS:", rooms);

            const roomList =  document.getElementById("roomList");
            roomList.innerHTML = "";


            // `<span style='color:#ff0000;'>${user}</span> <br>`
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
      // const newRoomUser = document.getElementById("roomForm").newRoomName.value;
      // console.log(newRoomUser);
      try {
            const newRoomName = await document.getElementById("roomForm").newRoomName.value;
            // console.log(newRoomName);

            if (newRoomName) {
                  socket.emit("newRoom", newRoomName);
                  document.getElementById("roomForm").newRoom.value = "";
                  joinRoom(newRoomName);
                  // document.getElementById('newRoomName').value = "";
            } else {
                  return false;
            }
      } catch (error) {
            return { status: "error", message: error };
      }
};
