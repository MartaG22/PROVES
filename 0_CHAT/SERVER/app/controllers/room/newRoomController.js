const Room = require('../../models/dbRoom.js');

console.log('esto es el CreateRoomController')

const newRoom = async (req, res) => {
      try {
            const room = await req.body;
            console.log("ROOM", room);

            if (!room.roomName) {
                  console.log("NO S'HA INTRODUIT CAP NOM DE SALA!");
                  return res.status(400).send({ status: "fail", message: "Dades introduides no vàlides!!!"})
            };

            const findRoom = await Room.find({ roomName: room.roomNewName });



      } catch {

      }
};

module.exports = newRoom;