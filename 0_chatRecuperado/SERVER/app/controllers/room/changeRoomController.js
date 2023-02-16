const Room = require("../../models/dbRoom.js");
const Usuari = require("../../models/dbUsuari.js");

const changeRoom = async (room, usuari) => {
      try {
            console.log("ROOM I USUARI EN CHANGEROOM controller", room, usuari)
            const userFind = await Usuari.findOne({ nomUsuari: usuari.userName });
            
            if (userFind) {

                  const currentUser = {
                        idUsuari: usuari.userId,
                        nomUsuari: usuari.userName,
                  };
                  const findOldRoom = await Room.findOne({ roomName: userFind.room })
                  const findNewRoom = await Room.findOne({ roomName: room})
                  console.log("msg:" ,'userFind', userFind, 'findOldRoom', findOldRoom, 'findNewRoom', findNewRoom)

                  // const currentUSerRoom = userFind.room;
                  // console.log("CURRENT USER ROOM", currentUSerRoom);

                  if ( findOldRoom) {
                        console.log("HHHHOOOOOLLLLLAAAAAAA ***** OLD ROOM ******** ENCONTRADA")
                        const usersInOldRoom = findOldRoom.usersInThisRoom;
                        console.log('usersInOldRoom  AANNTTESS', usersInOldRoom);
                        const newUsersInOldRoom = usersInOldRoom.filter((user) => {
                              return user.idUsuari != currentUser.idUsuari
      
                        });
                        console.log('usersInOldRoom DDEESSPUUUUUUESSSSSSSSSSS', newUsersInOldRoom);
                        await findOldRoom.updateOne({
                              usersInThisRoom: newUsersInOldRoom,
                        });
      
      
                  }

                  const arrayUsersNewRoom = findNewRoom.usersInThisRoom;
                  arrayUsersNewRoom.push(currentUser);


                  await findNewRoom.updateOne({
                        // const updateUsersToRoom = await currentRoom.updateOne({
                        usersInThisRoom: arrayUsersNewRoom,
                  });
                  await Usuari.findOneAndUpdate({ idUsuari: currentUser.idUsuari }, { room: room });
                  console.log('find NEW RROOOMMMM per passar a SERVER/SOCKETS', findNewRoom)
                  return { status: "success", findNewRoom };


            }


      } catch (error) {
            return { status: "error", message: error };
      }
};

module.exports = changeRoom;