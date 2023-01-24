const Room = require('../../models/dbRoom.js');

// Inicialitzem una ROOM per començar!
const initRoom = async () => {
      let firstRoom = "Pangea"
      const findRoom = await Room.findOne({ roomName: firstRoom });
      console.log(findRoom);

      if (!findRoom) {
            room = await Room.create({ roomName: firstRoom });
      };
};

module.exports = initRoom;