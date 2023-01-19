const Room = require("../../models/dbRoom.js");

// const newRoom = async (req, res) => {
const newRoom = async (newRoomName) => {
    console.log("esto es el CreateRoomController");
    let result;
    try {
        // const room = await req.body;
        console.log("ROOM", newRoomName);

        // if (!room.roomName) {
        //       console.log("NO S'HA INTRODUIT CAP NOM DE SALA!");
        //       return res.status(400).send({ status: "fail", message: "Dades introduides no vàlides!!!"})
        // };

        const findRoom = await Room.findOne({ roomName: roomNewName });
        console.log("findRoom", findRoom);
        if (findRoom) {
            // result = {}
            console.log("Aquesta sala ja existeix");
        } else {
            const room = await Room.create(roomName);
            result = { status: "success", room };
        }
    } catch {
        return { status: "error", message: error.message };
    }
};

module.exports = newRoom;
