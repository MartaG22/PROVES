const { isObjectIdOrHexString } = require("mongoose");
const Room = require("../../models/dbRoom.js");

const sendMessage = async (newMessage, currentUser, room) => {
      // SERVER
      console.log('newMessageUser', newMessage);
      console.log('currentUser para coger el ID pàra guardar en la DBdel mensaje', currentUser)
      console.log({msg: "ARRIBEN LES SEGÜENTS DADES A MESSAGECONTOLLER/SENdMESSAGe:", newMessage, currentUser, room})

      // const currentRoom = await Room.findOne({ roomName: room})
      // console.log('CURRENT TOOM EN sendMESSAGECONTROLLER', currentRoom);
      const currentRoom = await Room.findOne({ roomName: room });
      
      if (currentRoom) {
            console.log("currentRoom encontrada*****")
            const previousMessages = currentRoom.message;
            // console.log('****  MISSATGES PREVIS EN SOCKETS/SENDMESSAGE CONTROLLER ****', previousMessages);

            const newMessageData = {idUsuari: currentUser.userId, nomUsuari: currentUser.userName,  missatge: newMessage};
            // const newMessage = {idUsuari: currentUser.userId,  missatge: newMessage};
            // console.log('newMessage grabado en la variable newMessage en SendMessage Contoller', newMessageData)

            
            previousMessages.push(newMessageData)
            
            
            await currentRoom.updateOne({message: previousMessages});
            
            // return currentRoom.message;
            return newMessageData;

      };

      

};

module.exports = sendMessage;