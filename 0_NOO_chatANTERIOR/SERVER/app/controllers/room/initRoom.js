const Room = require('../../models/dbRoom.js');

// Inicialitzem una ROOM per començar!
const initFirstRoom = async () => {
      let firstRoom = "Pangea"
      const findRoom = await Room.findOne({ roomName: firstRoom });
      console.log(findRoom);

      if (!findRoom) {
            await Room.create({ roomName: firstRoom });
      };
};

module.exports = initFirstRoom;