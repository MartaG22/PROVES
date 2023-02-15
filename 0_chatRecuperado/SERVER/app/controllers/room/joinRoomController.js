const Room = require("../../models/dbRoom.js");
const Usuari = require("../../models/dbUsuari.js");
// const getUsers = require("../models/dbUsuari.js");


const joinRoom = async (room, usuari) => {
      console.log("ROO I USUARI EN JOINROOM controller", room, usuari)
      //! ARRAY D'USUARIS A LA SALA:
      try {
            const currentRoom = await Room.findOne({ roomName: room });
            //* console.log("PROVA:", currentRoom);

            if (currentRoom) {
                  const usersInCurrentRoom = currentRoom.usersInThisRoom;
                  const currentUser = {
                        idUsuari: usuari.userId,
                        nomUsuari: usuari.userName,
                  };

                  console.log('currentUser', currentUser);

                  const findUserInRoom = usersInCurrentRoom.find(user => (user.idUsuari === currentUser.idUsuari && user.nomUsuari === currentUser.nomUsuari));
                  console.log('findUserInRoom', findUserInRoom)

                  if (findUserInRoom) {
                        //! AQUEST USUARI JA ESTÀ CONNECTAT A AQUESSTA SALA
                        //? FER EL RETURN
                        console.log("Aquest USUARI ja està connectat a aquesta ROOM");
                        return { status: "error", message: "Aquest USUARI ja està connectat a aquesta ROOM" };
                        //! SI l'usuari ja existeix a la sala ha de mostrar un missatge de que ja està connectat a la ROOM
                        //! I NO S'HA DE PUJAR A LA ROOM!!!
                  };

                  console.log("currentUser en joinROOM Controller", currentUser);
                  usersInCurrentRoom.push(currentUser);


                  await currentRoom.updateOne({
                        // const updateUsersToRoom = await currentRoom.updateOne({
                        usersInThisRoom: usersInCurrentRoom,
                  });

                  await Usuari.findOneAndUpdate({ idUsuari: currentUser.idUsuari }, { room: currentRoom.roomName });
                  return { status: "success", currentRoom };

            } else {
                  return { status: "error", message: "No s'ha trobat la Sala" };
            };

      } catch (error) {
            return { status: "error", message: error };
      }
};

module.exports = joinRoom;
