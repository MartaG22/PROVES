const Room = require("../../models/dbRoom.js");

const getDataRoom = async (room) => {
      try {

            console.log("ROOM INIT:", room)
            const currentRoom = await Room.findOne({ roomName: room });
            // console.log("CURRENTROOM INIT:", currentRoom);

            // let enterRoom = await joinRoom(room, usuari);
            // // console.log('enterRoom', enterRoom)
            // if (enterRoom.status === "success") {
                
            
            
                  // JOIN NEW ROOM:
                // console.log({msg: 'enterRoom en SOCKETS', room, usuari});  //! comentario de OMAR
                // console.log ({msg: "enterRoom.room:", enterRoom.usersInThisRoom})
                // console.log("enterRoom.currentRoom", enterRoom.currentRoom, "\n \n", "enterRoom.usersInThisRoom", enterRoom.currentRoom.usersInThisRoom);
                const arrayUsersInRoom = [];
                currentRoom.usersInThisRoom.forEach((user) => {
                    arrayUsersInRoom.push(user.nomUsuari);
                });
                console.log('arrayUsersInRoom en SOCKETS/GETDATAROOM', arrayUsersInRoom);
                // const currentUser = usuari.userName;
                const previousMessages = currentRoom.message;
                console.log("previousMessages en SERVER/GETDATAROOM:", previousMessages)
                // io.emit("joinNewRoom", room, arrayUsersInRoom, currentUser, previousMessages);





            // const currentRooms = await Room.find({});
            // console.log('currentRooms en GETROOMSCONTROLLER', currentRooms);

            return { status: "success", currentRoom, arrayUsersInRoom};  //! ENVÍO TODOS LOS DATOS DE TODAS LAS SALAS
      
      } catch (error) {
            return { status: "error", message: error.message }
      }
}

module.exports = getDataRoom;