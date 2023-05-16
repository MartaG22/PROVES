const Room = require("../../models/dbRoom.js");

const getPreviousMessages = async ( currentUser, room) => {
      try {

            console.log({msg: "ARRIBEN LES SEGÜENTS DADES A MESSAGECONTOLLER / getPreviousMESSAGES:", currentUser, room})
            
            const currentRoom = await Room.findOne({ roomName: room})
            console.log('CURRENT ROOM EN MESSAGECONTROLLER', currentRoom);
            
            
            if (currentRoom) {
                  console.log("currentRoom encontrada*****")
                  const getMessages = currentRoom.message;
                  
                  console.log("getMessage:", getMessages)
                  
                  
                  return { status: "success", getMessages };
                  
                  
                  // await currentRoom.message.updateOne({idUsuari: currentUser.userId,  missatge: newMessage})
            }
      } catch (error) {
            return { status: "error", message: error.message }
      }


};


module.exports = getPreviousMessages;