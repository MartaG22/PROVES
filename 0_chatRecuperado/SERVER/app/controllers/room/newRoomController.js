const Room = require("../../models/dbRoom.js");
const Usuari = require("../../models/dbUsuari.js");


const createRoom = async (newRoomName) => {
    console.log("msg:", "DaDES REBUDES EN CREATEROOM CONTROLLER para añadir al USUARIO ahora", newRoomName)
    try {
        
        const usersInCurrentRoom = [];
        const findRoom = await Room.findOne({ roomName: newRoomName.newRoomName });
        console.log(findRoom);

        if (findRoom) {
            return { status: "error", message: "Ja existeix una sala amb aquest nom" };

        } else {
            // usersInCurrentRoom.push(newRoomName.usuari);
            // console.log('usersInCurrentRoom en el IF', usersInCurrentRoom)
            const newRoom = await Room.create({roomName: newRoomName.newRoomName});
            // await newRoom.updateOne({usersInThisRoom: usersInCurrentRoom});
            // await Usuari.findOneAndUpdate({ idUsuari: newRoomName.usuari.userId }, { room: newRoomName.newRoomName });

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
