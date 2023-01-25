const Room = require("../../models/dbRoom.js");
const Usuari = require('../../models/dbUsuari.js');


const joinRoom = async (room, usuari) => {
      console.log("ROOM en joinROOM Controller", room);
      console.log("USER en joinROOM Controller", usuari);

      try {
            const currentUser = await Usuari.findOne(usuari.idUsuari);
            console.log('currentUser en joinROOM Controller', currentUser);

            if (currentUser) {
                  return ({ status: "success", currentUser });
            } else {
                  return ({ status: "error", message: "No s'ha pogut entrar a la Sala"})
            }

      } catch {

      }
}

module.exports = joinRoom;