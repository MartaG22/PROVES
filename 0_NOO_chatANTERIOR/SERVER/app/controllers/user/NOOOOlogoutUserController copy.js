const Usuari = require('../../models/dbUsuari.js');
const Room = require('../../models/dbRoom.js');
// const getUsers = require("../user/getUsersController.js");


const disconnectUser = async (usuari) => {
      console.log("USUARI A DESCONNECTAR - en PUBLIC/DISCTONNECTUSER:", usuari);
      //! FINS AQUÍ ARRIBA   BÉ    EL USUARI A DESCONNECTAR 
      try {
            // const currentRoom = await Room.findOne({ roomName: room });


            // const usersInCurrentRoom = await Room.findOneAndRemove({usersInThisRoom:{nomUsuari: usuari.userName}})
            const findUserInRoom = await Usuari.findOne({ idUsuari: usuari.userId });
            console.log('findUserInRoom ANTEW', findUserInRoom);
            const currentRoom = findUserInRoom.room;
            console.log('currentRoom en DISCONNECT USER, para quitar el user de la room', currentRoom)
            let noRoom = null;
            if (findUserInRoom) {
                  console.log("ENTRO EN EL IF")
                  await findUserInRoom.updateOne({ room: noRoom });
                  // console.log("LOG 1:", findUserInRoom.room)
                  const getUsers = getUsers(currentRoom);
                  console.log("LOG 2:",getUsers)

/* 
                  const findCurrentRoom = await Room.findOne({ roomName: currentRoom });
                  console.log('*** arrayUsersInRoom:', findCurrentRoom)
                  //! no muestra el array de user
                  const arrayUsersInRoom = findCurrentRoom.usersInThisRoom;
                  // console.log('*** arrayUsersInRoom:', arrayUsersInRoom)
 */


                  const newUsersInRoom = getUsers.arrayUsersInRoom.filter((user) => {
                        return user.idUsuari != findUserInRoom.idUsuari
                        // && user.nomUsuari != findUserInRoom.nomUsuari
                  });

                  console.log('valor', newUsersInRoom)
                  if (newUsersInRoom) {
                        await getUsers.findCurrentRoom.updateOne({ usersInThisRoom: newUsersInRoom });
                        result = { status: "success", newUsersInRoom }
                  }

            };

            // const usersInCurrentRoom = await Room.findOneAndRemove({usersInThisRoom:{nomUsuari: usuari.userName}})
            // const usersInCurrentRoom = await Room.find({usersInThisRoom});

            //! <<<<<me  he  quedado  aquí  <<<<<<<<<<>>>>>>>>>>>> <<<<<<<<<<<<<>>>>>>>>>>>>>>
            //* TENDRÍA QUE REFACTORIZARLO PARA QUE NO SE TENGA QUE HACER TANTAS BUSQUEDAS EN LA DB
            //! <<<<<me  he  quedado  aquí  <<<<<<<<<<>>>>>>>>>>>> <<<<<<<<<<<<<>>>>>>>>>>>>>>

            // const findUserInRoom2 = await Usuari.findOne({idUsuari: usuari.userId});
            // console.log('findUserInRoom2 DESPUES', findUserInRoom2)



            // const userToDisconnect = await Room.findByIdAndUpdate(
            //       { }
            //       { _id: user.idUsuari }, 
            //       { 'room.roomId': null, 'room.roomName': null}
            // );
            // console.log(userToDisconnect);

            // if (userToDisconnect) {
            // result = {status: "success", userToDisconnect}
            // }

      } catch (error) {
            result = { status: "error", message: error.message }
      }


}

module.exports = disconnectUser;