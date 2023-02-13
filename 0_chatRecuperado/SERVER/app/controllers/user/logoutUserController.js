const Usuari = require('../../models/dbUsuari.js');
const Room = require('../../models/dbRoom.js');

const disconnectUser = async (usuari) => {
      console.log("USUARI A DESCONNECTAR - en SERVER/DISCTONNECTUSER:", usuari);
      //! FINS AQUÍ ARRIBA   BÉ    EL USUARI A DESCONNECTAR 
      try {
            const findUserInRoom = await Usuari.findOne({ idUsuari: usuari.userId });
            const currentRoom = findUserInRoom.room;
            let noRoom = null;
            const newArrayUsers = []

            if (findUserInRoom) {
                  await findUserInRoom.updateOne({ room: noRoom });
                  const findCurrentRoom = await Room.findOne({ roomName: currentRoom });

                  const arrayUsersInRoom = findCurrentRoom.usersInThisRoom;
                  const newUsersInRoom = arrayUsersInRoom.filter((user) => {
                        return user.idUsuari != findUserInRoom.idUsuari

                  });

                  newUsersInRoom.forEach(user => {
                        console.log("user en FOREACH:", user)
                        newArrayUsers.push(user.nomUsuari)
                  })
                  console.log('newArrayUsers', newArrayUsers)
                  await findCurrentRoom.updateOne({ usersInThisRoom: newUsersInRoom });
                  return ({ status: "success", currentRoom, newArrayUsers });

            };


      } catch (error) {
            result = { status: "error", message: error.message }
      };

};

module.exports = disconnectUser;