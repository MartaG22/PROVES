const Usuari = require("../../models/dbUsuari.js");
const Room = require("../../models/dbRoom.js");



const getUsersRoom = async (room) => {
      try {
            const currentRoom = await Room.findOne({ roomName: room });
            if (currentRoom) {
                  const usersInCurrentRoom = currentRoom.usersInThisRoom;
                  return { status: "success", usersInCurrentRoom };
            };

      } catch (error) {
            return { status: "error", message: error };
      }
}


module.exports = getUsersRoom;
