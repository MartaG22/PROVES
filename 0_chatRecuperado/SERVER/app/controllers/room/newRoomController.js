const Room = require("../../models/dbRoom.js");

const createRoom = async (newRoomName) => {
    try {
        
        const findRoom = await Room.findOne({ roomName: newRoomName.newRoomName });
        console.log(findRoom);

        if (findRoom) {
            return { status: "error", message: "Ja existeix una sala amb aquest nom" };

        } else {

            const newRoom = await Room.create({roomName: newRoomName.newRoomName});
            return {
                status:"success",
                newRoom
            };
        }
    
    } catch (error) {
        return { status: "error", message: error };
};
}

module.exports = createRoom;
