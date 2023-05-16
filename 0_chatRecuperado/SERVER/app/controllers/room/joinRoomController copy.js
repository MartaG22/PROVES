const Room = require("../../models/dbRoom.js");
const Usuari = require("../../models/dbUsuari.js");

const joinRoom2 = async (room, usuari) => {
      try {
            const currentRoom = await Room.findOne({ roomName: room });
            if (currentRoom) {
                  const currentUser = {
                        idUsuari: usuari.userId,
                        nomUsuari: usuari.userName,
                  };

                  const usersInCurrentRoom = [currentUser];
                  const findUserInRoom = usersInCurrentRoom.find(user => (user.idUsuari === currentUser.idUsuari && user.nomUsuari === currentUser.nomUsuari));
                  console.log('findUserInRoom', findUserInRoom);

                  if (findUserInRoom) {
                        console.log("Aquest USUARI ja està connectat a aquesta ROOM");
                        return { status: "success",  currentRoom };

                  };

                  await currentRoom.updateOne({
                        usersInThisRoom: usersInCurrentRoom,
                  });

                  await Usuari.findOneAndUpdate({ idUsuari: currentUser.idUsuari }, { room: currentRoom.roomName });
                  return { status: "success",  currentRoom };
            };

      } catch (error) {
            return { status: "error", message: error };
      };
};



const joinRoom = async (room, usuari) => {
      try {
            const currentRoom = await Room.findOne({ roomName: room });

            if (currentRoom) {
                  const usersInCurrentRoom = currentRoom.usersInThisRoom;
                  const currentUser = {
                        idUsuari: usuari.userId,
                        nomUsuari: usuari.userName,
                  };

                  const findUserInRoom = usersInCurrentRoom.find(user => (user.idUsuari === currentUser.idUsuari && user.nomUsuari === currentUser.nomUsuari));

                  if (findUserInRoom) {
                        // return { status: "error", message: "Aquest USUARI ja està connectat a aquesta ROOM" };
                        return { status: "success",  currentRoom };
                  };

                  usersInCurrentRoom.push(currentUser);
                  await currentRoom.updateOne({
                        usersInThisRoom: usersInCurrentRoom,
                  });

                  await Usuari.findOneAndUpdate({ idUsuari: currentUser.idUsuari }, { room: currentRoom.roomName });
                  return { status: "success", currentRoom };

            } else {
                  return { status: "error", message: "No s'ha trobat la Sala" };
            };

      } catch (error) {
            return { status: "error", message: error };
      };
};

module.exports = joinRoom2;
