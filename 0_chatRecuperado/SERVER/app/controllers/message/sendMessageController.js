const Room = require("../../models/dbRoom.js");

const sendMessage = async (newMessage, currentUser) => {
      // SERVER
      console.log('newMessageUser', newMessage);
      console.log({msg: "ARRIBEN LES SEGÜENTS DADES A MESSAGECONTOLLER/SENdMESSAGe:", newMessage, currentUser, room})

      const currentRoom = await Room.findOne({ roomName: room})
      console.log('CURRENT TOOM EN sendMESSAGECONTROLLER', currentRoom);


      if (currentRoom) {
            console.log("currentRoom encontrada*****")
            const getMessage = currentRoom.message;

            console.log("getMessage en SENDMESSGECONTROLLER:", getMessage)




            // await currentRoom.message.updateOne({idUsuari: currentUser.userId,  missatge: newMessage})
      }


};

module.exports = sendMessage;