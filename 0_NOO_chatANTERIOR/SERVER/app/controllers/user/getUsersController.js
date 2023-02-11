const Usuari = require("../../models/dbUsuari.js");
const Room = require("../../models/dbRoom.js");

/* 
const getUsers = async (room) => {
      console.log("rrrrroooooommmmm", room);

      try {
            // PARA BUSAR LOS USUARIOS DE LA SALA -- trozo pasado desde logoutUserController --
            const findCurrentRoom = await Room.findOne({ roomName: room });
            console.log("*** arrayUsersInRoom:", findCurrentRoom);
            //! no muestra el array de user
            const arrayUsersInRoom = findCurrentRoom.usersInThisRoom;
            // console.log('*** arrayUsersInRoom:', arrayUsersInRoom)
            // let users = await Usuari.find()
            return {findCurrentRoom, arrayUsersInRoom};
      } catch { }
};

module.exports = getUsers;
 */



const getUsersRoom = async (room) => {
      try {
            const currentRoom = await Room.findOne({ roomName: room });
            console.log('<<<<<<<<<<<<----->>>>>>>>>>>>>currentRoom en getusers contorller<<', currentRoom)
            if (currentRoom) {
                  const usersInCurrentRoom = currentRoom.usersInThisRoom;
                  return { status: "success", usersInCurrentRoom };
            };
//! PASAR  A ESTE CONTROLLER PARA BUSCAR EL ARRAU  DE USUARIOS DESDE OTROS CONTROLLERS PARA REFACTORIZAR!!!
            // const findUserInRoom = usersInCurrentRoom.find(user => (user.idUsuari === currentUser.idUsuari && user.nomUsuari === currentUser.nomUsuari));
            // console.log('findUserInRoom', findUserInRoom)


      } catch (error) {
            return { status: "error", message: error };
      }
}


module.exports = getUsersRoom;
