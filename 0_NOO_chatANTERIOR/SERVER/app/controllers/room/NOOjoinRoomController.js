const Room = require("../../models/dbRoom.js");
const Usuari = require("../../models/dbUsuari.js");

const joinRoom = async (room, usuari) => {
      // console.log("ROOM en joinROOM Controawailler", room);
      // console.log("USER en joinROOM Controller", usuari);
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

                  if (currentUser) {

                        const findUserInRoom = usersInCurrentRoom.find(user => (user.idUsuari === currentUser.idUsuari && user.nomUsuari === currentUser.nomUsuari));

                        if (findUserInRoom) {
                              //! AQUEST USUARI JA ESTÀ CONNECTAT A AQUESSTA SALA
                              //? FER EL RETURN
                              console.log("Aquest USUARI ja està connectat a aquesta ROOM");
                              return { status: "error", message: "Aquest USUARI ja està connectat a aquesta ROOM" };


                        } else {

                              // console.log("currentUser en joinROOM Controller", currentUser);
                              usersInCurrentRoom.push(currentUser);
                              //! SI l'usuari ja existeix a la sala ha de mostrar un missatge de que ja està connectat a la ROOM
                              //! I NO S'HA DE PUJAR A LA ROOM!!!
                                                           
                              
                              await currentRoom.updateOne({ usersInThisRoom: usersInCurrentRoom });
                              console.log('usersInThisRoom DENTRO DEL IF CURRENTUSER EN JOINROOMCONTROLLER', usersInThisRoom)
                              return { status: "success", usersInThisRoom };
                              
                        };

                  };
            } else {
                  return { status: "error", message: "No s'ha trobat la Sala" };
            };

      } catch (error) {
            return { status: "error", message: error };
      }
};

module.exports = joinRoom;
