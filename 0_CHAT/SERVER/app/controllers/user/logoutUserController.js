const Usuari = require('../../models/dbUsuari.js');

const disconnectUser = async (usuari) => {
      console.log("USUARI A DESCONNECTAR:", usuari);

      try {
            const userToDisconnect = await Usuari.findByIdAndUpdate(
                  { _id: user.idUsuari }, 
                  { 'room.roomId': null, 'room.roomName': null}
            );
            console.log(userToDisconnect);

            if (userToDisconnect) {
                  result = {status: "success", userToDisconnect}
            }

      } catch (error) {
            result = {status: "error", message: error.message}
      }


}

module.exports =  disconnectUser;