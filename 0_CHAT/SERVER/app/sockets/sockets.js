const jwt = require("jsonwebtoken");
const disconnectUser = require("../controllers/user/logoutUserController.js");
// const registerUserController = require("../controllers/user/loginUserController.js");
// const loginUserController = require("../controllers/user/registerUserController.js");
const getUsers = require("../models/dbUsuari.js");
const initRoom = require("../controllers/room/initRoom.js");
const createRoom = require("../controllers/room/newRoomController.js");
const getRooms = require("../controllers/room/getRoomsController.js");

// const SocketIO = require("socket.io");
// const io = SocketIO.listen(server);

const sockets = async (io) => {
    io.use(function (socket, next) {
        // console.log("MIDDLEWARE SOCKETS")
        if (socket.handshake.query && socket.handshake.query.token) {
            // console.log(socket.handshake.query.token)
            jwt.verify(
                socket.handshake.query.token,
                process.env.ACCESS_TOKEN_KEY,
                function (error, decoded) {
                    if (error) return next(new Error("Authentication error"));
                    socket.decoded = decoded;
                    next();
                }
            );
        } else {
            throw new Error("Authenticatoin error");
        }
    });

    io.on("connection", async (socket) => {
        console.log("Nou usuari connectat");
        console.log("SOCKET:", socket.id);

        const usuari = {
            userId: socket.decoded.idUsuari,
            userName: socket.decoded.nomUsuari,
        };

        console.log(`USUARI ${usuari.userName} connected`);
        console.log("USUARI ABANS DE NEWROOM", usuari);

        initRoom();

        /* 
        socket.on ('newRoom',  async (newRoomName) => {
            console.log('roomName DESPRÉS del NEWROOM', newRoomName)
            // let currentUser = usuari;
            let createNewRoom =  await createRoom({newRoomName});
            // console.log('createNewRoom en SOCKET/NEWROOM', createNewRoom)
            
            if (createNewRoom.status === "success") {
                console.log("SALA CREADA OK");
                console.log(createNewRoom);

                let usersInThisRoom = await getUsers(createNewRoom);
                console.log('usersInThisRoom', usersInThisRoom)


                io.emit("getRooms", createNewRoom);   //! FALTARIA AFEGIR ELS USUARIS i acabar el controller!!!

            }
        }); */

        socket.on("getRooms", async () => {
            // initRoom();

            try {
                let currentCreatedRooms = await getRooms();
                console.log("currentCreatedRooms", currentCreatedRooms.currentRooms);
                let countRooms = currentCreatedRooms.currentRooms.length;
                let arrayCurrentRooms = [];
                console.log('countRooms', countRooms)
                
                if (currentCreatedRooms.status === "success") {
                    for (let i = 0; i < countRooms; i++) {
                        let roomName = currentCreatedRooms.currentRooms[i].roomName;
                        arrayCurrentRooms.push(roomName);
                    };
                    
                    console.log('countRooms', arrayCurrentRooms)
                    io.to(socket.id).emit("newRoom", arrayCurrentRooms);

                } else {
                    io.to(socket.id).emit('error', currentCreatedRooms.error)
                }



            } catch (error) {
                return { status: "error", message: error };
            }

            // try {
            //     let currentCreatedRooms = await getRooms();
            //     console.log("currentCreatedRooms", currentCreatedRooms.currentRooms);
            //     let countRooms = currentCreatedRooms.currentRooms.length;
            //     let arrayCurrentRooms = [];
            //     // console.log('countRooms', countRooms)

            //     for (let i = 0; i < countRooms; i++) {
            //         let roomName = currentCreatedRooms.currentRooms[i].roomName;
            //         arrayCurrentRooms.push(roomName);
            //     };

            //     console.log(arrayCurrentRooms);

            //     if (currentCreatedRooms.status === "success") {
            //         io.to(socket.id).emit(arrayCurrentRooms);
            //     }
            // } catch (error) {
            //     return { status: "error", message: error };
            // }
        });

        // //! creo que no funciona porque no tengo botón de desconexión!!!
        // socket.on("disconnect", async () => {
        //     try {
        //         let userToDisconnect = await disconnectUser(usuari);
        //         console.log('userToDisconnect', userToDisconnect)
        //         if ( userToDisconnect.status === "success") {
        //             console.log(userToDisconnect)
        //         }
        //     } catch (error){
        //         console.log(error)
        //     }
        // })
    });
};

/*
const sockets = async (io) => {
    io.on("new-message", (data) => {
        // messages.push(data);
        console.log("DATA", data);

        const user = {
            //! V
            userId: socket.decoded.userId,
            userName: socket.decoded.userName,
        };

        console.log(`user ${user.userName} connected`);

        // io.sockets.emit("messages", messages);
    });
};
*/

module.exports = sockets;
