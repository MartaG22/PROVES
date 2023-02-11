const jwt = require("jsonwebtoken");
const disconnectUser = require("../controllers/user/logoutUserController.js");
// const registerUserController = require("../controllers/user/loginUserController.js");
// const loginUserController = require("../controllers/user/registerUserController.js");
const getUsers = require("../models/dbUsuari.js");
const initFirstRoom = require("../controllers/room/initRoom.js");
const createRoom = require("../controllers/room/newRoomController.js");
const getRooms = require("../controllers/room/getRoomsController.js");
const joinRoom = require("../controllers/room/NOOjoinRoomController.js");
// const getMessages = require("../controllers/message/getMessagesController.js")
const sendMessage = require("../controllers/message/sendMessageController.js");

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

        // console.log(`USUARI ${usuari.userName} connected`);
        // console.log("USUARI ABANS DE NEWROOM", usuari);

        // Inicialitzem la Primera Sala (PANGEA)
        initFirstRoom();

        socket.on("joinRoom", async (room) => {
            try {

                let enterRoom = await joinRoom(room, usuari);
                // console.log('enterRoom', enterRoom)
                if (enterRoom.status === "success") {
                    // JOIN NEW ROOM:
                    // console.log({msg: 'enterRoom en SOCKETS', room, usuari});  //! comentario de OMAR
                    // console.log ({msg: "enterRoom.room:", enterRoom.usersInThisRoom})
                    console.log("usersInThisRoom", usersInThisRoom);
                    const arrayUsersInRoom = [];
                    enterRoom.currentRoom.usersInThisRoom.forEach((user) => {
                        arrayUsersInRoom.push(user.nomUsuari);
                    });
                    // console.log('arrayUsersInRoom en SOCKETS/JOINROOM', arrayUsersInRoom);
                    const currentUser = usuari.userName;



                    const previousMessages = enterRoom.currentRoom.message;
                    console.log("MESSAGES  previos EN KJJOIN ROOM ", previousMessages)
                    //! <<<<<<<<<<<<<<   -------  >>>>>>>>>>>>>>>>>
                    //! <<<<<<<<<<<<<<   -------  >>>>>>>>>>>>>>>>>
                    //? <<<< ++++++ ******   ME HE QUEDADO AQUÍ   *** +++++ >>>>>>
                    //! <<<<<<<<<<<<<<   -------  >>>>>>>>>>>>>>>>>
                    //! <<<<<<<<<<<<<<   -------  >>>>>>>>>>>>>>>>>



                    console.log({msg: "joinNewRoom", room, arrayUsersInRoom, currentUser, previousMessages});
                    io.emit("joinNewRoom", room, arrayUsersInRoom, currentUser, previousMessages);

                } else {
                    // io.emit(ERROR);
                    //! <<<***>>>   FALTA ACABAR AQUEST CONTROLOADOR // NO SÉ COM ÉS  EL RETURN AMB L'ERROR !!!!
                };
            } catch (error) {
                return { status: "error", message: error };
            };
        });



        socket.on("newRoom", async (newRoomName) => {
            // console.log('roomName DESPRÉS del NEWROOM', newRoomName)
            // let currentUser = usuari;
            try {
                let createNewRoom = await createRoom({ newRoomName });
                // console.log('createNewRoom en SOCKET/NEWROOM', createNewRoom)

                if (createNewRoom.status === "success") {
                    console.log("SALA CREADA OK");
                    console.log(createNewRoom);

                    let usersInThisRoom = await getUsers(createNewRoom);
                    console.log("usersInThisRoom", usersInThisRoom);

                    io.emit("getRooms", createNewRoom); // FALTARIA AFEGIR ELS USUARIS i acabar el controller!!!
                };
            } catch (error) {
                return { status: "error", message: error };
            };
        });



        socket.on("getRooms", async () => {
            // initRoom();
            try {
                let currentCreatedRooms = await getRooms();
                console.log(
                    "currentCreatedRooms",
                    currentCreatedRooms.currentRooms
                );
                let countRooms = currentCreatedRooms.currentRooms.length;
                let arrayCurrentRooms = [];
                console.log("countRooms", countRooms);

                if (currentCreatedRooms.status === "success") {
                    for (let i = 0; i < countRooms; i++) {
                        let roomName =
                            currentCreatedRooms.currentRooms[i].roomName;
                        arrayCurrentRooms.push(roomName);
                    }

                    console.log("Rooms:", arrayCurrentRooms);
                    io.to(socket.id).emit("newRoom", arrayCurrentRooms);
                } else {
                    io.to(socket.id).emit("error", currentCreatedRooms.error);
                }
            } catch (error) {
                return { status: "error", message: error };
            }
        });


        socket.on('newMessage', async (newMessage, room) => {
            
            try {

                const currentUser = usuari.userName;
                //! FALTA CAPTURAR EL ROOM PER PASSAR AL CONTROLLER!
                const sendNewMessage = await sendMessage(newMessage, currentUser, room);
                console.log('sendNewMessage', sendNewMessage)

            } catch (error) {
                return { status: "error", message: error };
            };            
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

module.exports = sockets;
