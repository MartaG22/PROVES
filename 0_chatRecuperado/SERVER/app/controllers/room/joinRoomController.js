const Room = require("../../models/dbRoom.js");
const Usuari = require("../../models/dbUsuari.js");

const joinRoom = async (room, usuari) => {
      // console.log("ROOM en joinROOM Controller", room);
      // console.log("USER en joinROOM Controller", usuari);
      //! ARRAY D'USUARIS A LA SALA:
      try {
            const currentRoom = await Room.findOne({ roomName: room });
            //* console.log("PROVA:", currentRoom);

            if (currentRoom) {
                  const usersInCurrentRoom = currentRoom.usersInThisRoom;
                   console.log("USERS PROVA:", usersInCurrentRoom);
                  
                  
                  // const currentUser = await Usuari.findOne({idUsuari: usuari.userId});
                  // console.log('currentUser en joinROOM Controller', currentUser);

                  console.log("USUARI IN KJOIN-ROOM", usuari)
                  const currentUser = {
                        idUsuari: usuari.userId,
                        nomUsuari: usuari.userName,
                  };
            
                  console.log('currentUser', currentUser)
                  // const found = array1.find(element => element > 10);
                  // this.array.find(x => x.idCustomer == 998);
                  const findUserInRoom = usersInCurrentRoom.find(user => (user.idUsuari === currentUser.idUsuari && user.nomUsuari === currentUser.nomUsuari));
                  console.log('findUserInRoom', findUserInRoom)

                  if (findUserInRoom) {
                        //! AQUEST USUARI JA ESTÀ CONNECTAT A AQUESSTA SALA
                        //? FER EL RETURN
                        console.log("Aquest USUARI ja està connectat a aquesta ROOM");

                  } else {

                        console.log("currentUser en joinROOM Controller", currentUser);
                        usersInCurrentRoom.push(currentUser);
                        console.log("USERS PROVA II:", usersInCurrentRoom);
                        //! SI l'usuari ja existeix a la sala ha de mostrar un missatge de que ja està connectat a la ROOM
                        //! I NO S'HA DE PUJAR A LA ROOM!!!
                  };

                  if (currentUser) {


                  //* PONER AQUÍ UN IF PARA LA CONDICIÓN DE QUE NO SE PUDA AÑADIR A LA SALA
                  
                        await currentRoom.updateOne({
                        // const updateUsersToRoom = await currentRoom.updateOne({
                              usersInThisRoom: usersInCurrentRoom,
                        });
                        console.log("currentRoom", currentRoom);
                        console.log(
                              "CURRENT ROOM - USUARIS IN THIS ROOM",
                              currentRoom.usersInThisRoom
                        );

                        // console.log('updateUsersToRoom', updateUsersToRoom)
                   

                        // const updateUser = await Room.findOneAndUpdate(
                        //       {roomName: room},
                        //       {$set: {idUsuarisInThisRoom: [{idUsuari: currentUser.userId, nomUsuari: currentUser.userNam}]}}
                        //       );

                        // console.log('updateUser. 2', updateUser)
                        //       console.log(currentUser.userId)
                        // const idCurrentUser = currentUser.userId;
                        // console.log('idCurrentUser', idCurrentUser)
                        // if (currentRoom){
                        //       //! SUBE EL USUARIO A LA SALA PERO BORRA EL ANTEIROR &&& GRABA EL IDUSUARI Y EL _ID
                        //       const updateUser = await Room.currentRoom({idUsuarisInThisRoom: currentUser.userId})
                        //       // ({idUsuarisInThisRoom: [{idUsuari: currentUser.userId}]})
                        //       // const usersCurrentRoom = await currentRoom.updateOne({idUsuarisInThisRoom: usuari});
                        //       console.log('updateUser', updateUser)

                        return { status: "success", currentRoom };

                  // } else {
                  //       return { status: "error", message: "No s'ha pogut entrar a la Sala"};
                  };
            } else {
                  return {status: "error", message: "No s'ha trobat la Sala"};
            };

      } catch (error) {
            return { status: "error", message: error };
      }
};

module.exports = joinRoom;
