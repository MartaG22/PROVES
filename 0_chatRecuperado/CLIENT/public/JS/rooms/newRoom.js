const joinRoom = (room) => {
      try {
            // if (sessionStorage.roomId === newRoomName.roomId) return;
            console.log("ROOM en newROOM", room.id);
            socket.emit("joinRoom", room.id);


            sessionStorage.roomName = room.roomName;
            sessionStorage.roomId = room.roomId;

            
      } catch (error) {
            return { status: "error", message: error };
      };
};

const showRoom =  (rooms) => {
      try {
            // console.log("ROOOOOMMMSSSS:", rooms);

            const roomList =  document.getElementById("roomList");
            roomList.innerHTML = "";


            // const btn = document.createElement("button");
            // buttonRooms.innerHTML = room;
            // btn
            // btn.classList.add("room-btn-active");
            // btn.textContent = room;
            // btn.setAttribute("id", room);
            // btn.onclick = () => {
            //       //! FALTAN COSAS
            //       console.log(` Li has donat a ${room}`)
            //       joinRoom(room);
            // }
            // roomList = document.getElementById("roomList");


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
