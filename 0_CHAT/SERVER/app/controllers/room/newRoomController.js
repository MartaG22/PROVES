const Room = require("../../models/dbRoom.js");

// const newRoom = async (req, res) => {
const createRoom = async (newRoomName) => {
    console.log("esto es el CreateRoomController");


    
    try {

        console.log('newRoomName en NEWROOMCONTROLLER', newRoomName);
        
        const findRoom = await Room.findOne({ roomName: newRoomName.newRoomName });
        console.log(findRoom);

        if (findRoom) {
            // console.log("HOOOKAAAA");
            return { status: "error", message: "Ja existeix una sala amb aquest nom" };

        } else {
            // console.log("lksjdflskfjs");
            // console.log("newRoomName.newRoomName", newRoomName.newRoomName)

            
            const newRoom = await Room.create({roomName: newRoomName.newRoomName});
            console.log('newRoomName:', newRoomName)
            console.log('newRoom', newRoom)
            return {
                status:"success",
                room: newRoomName
                // room: {}
                // room: {roomName: newRoom},
                // roomName: newRoom
            };
        }

    
    } catch (error) {
        return { status: "error", message: error };   //! SE QUEDA PILLADO EN ESTE ERROR
};
}

module.exports = createRoom;
