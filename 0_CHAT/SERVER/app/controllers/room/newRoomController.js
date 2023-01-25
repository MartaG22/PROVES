const Room = require("../../models/dbRoom.js");

// const newRoom = async (req, res) => {
const createRoom = async (newRoomName) => {
    // console.log("esto es el CreateRoomController");
    // console.log("newRoomName en CreateRoomController", newRoomName)
    // console.log("USUARI en CreateRoomController")  //! NO arriba el nom de l'USUARI
    try {

        // console.log('newRoomName en NEWROOMCONTROLLER', newRoomName);
        
        const findRoom = await Room.findOne({ roomName: newRoomName.newRoomName });
        console.log(findRoom);

        if (findRoom) {
            return { status: "error", message: "Ja existeix una sala amb aquest nom" };

        } else {
            // console.log("newRoomName.newRoomName", newRoomName.newRoomName)

            const newRoom = await Room.create({roomName: newRoomName.newRoomName});
            // console.log('newRoomName:', newRoomName)
            // console.log('newRoom', newRoom)
            return {
                status:"success",
                newRoom: roomName
            };
        }

    
    } catch (error) {
        return { status: "error", message: error };
};
}

module.exports = createRoom;
