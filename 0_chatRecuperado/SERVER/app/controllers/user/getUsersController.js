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



const getUsers = async (room) => {
      try {
            // const findUserInRoom = usersInCurrentRoom.find(user => (user.idUsuari === currentUser.idUsuari && user.nomUsuari === currentUser.nomUsuari));
            // console.log('findUserInRoom', findUserInRoom)


      } catch (error) {
            return { status: "error", message: error };
      }
}


module.exports = getUsers;
