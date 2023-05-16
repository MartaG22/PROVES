const jwt = require("jsonwebtoken");
const disconnectUser = require("../controllers/user/logoutUserController.js");

const initFirstRoom = require("../controllers/room/initRoom.js");
const createRoom = require("../controllers/room/newRoomController.js");
const getRooms = require("../controllers/room/getRoomsController.js");
const joinRoom = require("../controllers/room/joinRoomController.js");
const getUsersRoom = require("../controllers/user/getUsersController.js")
const sendMessage = require("../controllers/message/sendMessageController.js");
const getDataRoom = require("../controllers/room/getDataRoom.js");


const sockets = async (io) => {
    io.use(function (socket, next) {

        if (socket.handshake.query && socket.handshake.query.token) {

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


        // Inicialitzem la Primera Sala (PANGEA)
        
        await initFirstRoom();

        io.emit("updateUserFirstRoom", async () => {
            try {
                let room = "Main";
                let enterRoom = await joinRoom(room, usuari);
                console.log('enterRoom en UPDATEFIRSTROOM:', enterRoom );
                if (enterRoom.status === "success") {
                    const getDataFirstRoom = await getDataRoom(room);
                    console.log('getDataFirstRoom', getDataFirstRoom);
                    //! const data =  *****>>>> pasar a variable DATA todos los datos recibidos para que sea más legible.
                    // console.log("DADES PER PASSAR A PUBLIC joinNewRoom", room, getDataFirstRoom.currentRoom.usersInThisRoom, usuari, getDataFirstRoom.currentRoom.message);
                    console.log("msg:","DADES PER PASSAR A PUBLIC joinNewRoom", room, "USUARIS:", getDataFirstRoom.arrayUsersInRoom, "usuari:", usuari.userName, getDataFirstRoom.currentRoom.message);
                    io.emit("joinNewRoom", room, getDataFirstRoom.arrayUsersInRoom, usuari.userName, getDataFirstRoom.currentRoom.message);

                }
            } catch (error) {
                return { status: "error", message: error.message }
            }
        })

        socket.on("joinRoom", async (room) => {
            try {
                console.log('room i uruari en SOCKET/joinRoom:', room, usuari)
                let enterRoom = await joinRoom(room, usuari);

                if (enterRoom.status === "success") {
                    const arrayUsersInRoom = [];
                    enterRoom.currentRoom.usersInThisRoom.forEach((user) => {
                        arrayUsersInRoom.push(user.nomUsuari);
                    });

                    const previousMessages = enterRoom.currentRoom.message;
                    console.log("previousMessages en SERVER/SOCKETs:", previousMessages)

                    // io.emit("joinNewRoom", room, arrayUsersInRoom, usuari, previousMessages);
                    io.emit("joinRoom", room, arrayUsersInRoom, usuari, previousMessages);
                } else {
                    //! <<<***>>>   FALTA ACABAR AQUEST CONTROLOADOR  !!!!   no funciona
                    // console.log("Aquest USUARI ja està connectat a aquesta ROOM")
                    // return { status: "error", message: "Aquest USUARI ja està connectat a aquesta ROOM" };


                };
            } catch (error) {
                return { status: "error", message: error };
            };
        });


//! ESTÁ AQUÍ EL PROBLEMA -->> NO ME MUESTRA LAS SALAS CUANDO SE CREA NUEVA --> EN EL GETROOMS
        socket.on("newRoom", async (newRoomName) => {
            try {
                let createNewRoom = await createRoom({ newRoomName });
                // console.log('createNewRoom en SOCKET/NEWROOM', createNewRoom)
                console.log('*********** createNewRoom en SOCKET/NEWROOM:', createNewRoom);

                if (createNewRoom.status === "success") {
                    console.log("SALA CREADA OK");

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
            console.log("<-<-<-<-<-<-<-<<hoooollllaaa>>->->->->->->->->")
            try {
                let currentCreatedRooms = await getRooms();
                // console.log("currentCreatedRooms", currentCreatedRooms.currentRooms);
                let countRooms = currentCreatedRooms.currentRooms.length;
                let arrayCurrentRooms = [];
                console.log("countRooms", countRooms);

                if (currentCreatedRooms.status === "success") {
                    for (let i = 0; i < countRooms; i++) {
                        let roomName =
                            currentCreatedRooms.currentRooms[i].roomName;
                            arrayCurrentRooms.push(roomName);
                    }

                    // console.log("Rooms:", arrayCurrentRooms);
                    io.to(socket.id).emit("newRoom", arrayCurrentRooms);
                } else {
                    io.to(socket.id).emit("error", currentCreatedRooms.error);
                }
            } catch (error) {
                return { status: "error", message: error };
            }
        });


        socket.on('newMessage', async (newMessage, room) => {
            console.log({ msg: "dades rebudes a SOCKETS/NEWMESSAGE:", newMessage, room });

            try {
                // const currentUser = usuari.userName;
                // const currentUser = usuari;

                const sendNewMessage = await sendMessage(newMessage, usuari, room.roomName);
                console.log('sendNewMessage en SOCKET/NEWMESSAGE', sendNewMessage);

                if (sendNewMessage) {
                    // io.emit("displayMessage", newMessage, usuari, room.roomName);
                    console.log("sendMessage antes de hacer el EMIT de ShowMESSAGE:", newMessage, usuari, room.roomName);

                    const arrayUsersInRoom = await getUsersRoom(room.roomName);
                    console.log('arrayUsersInRoom en SOCKETS/GETUSERROOM', arrayUsersInRoom)

                    io.emit("sendMessage", sendNewMessage, usuari, room.roomName, arrayUsersInRoom);

                };

            } catch (error) {
                return { status: "error", message: error };
            };
        });







        socket.on("disconnect", async () => {
            try {
                // console.log("ROOM en DISCONNECT USER", room)
                console.log("***************** usuari en SOCKET/ DISCONNECT", usuari)
                let getUsersRoom = await disconnectUser(usuari);

                if (getUsersRoom.status === "success") {

                    // console.log(getUsersRoom, getUsersRoom)
                    // console.log('newArrayUsers EN SERVER/SOCKETS', getUsersRoom.currentRoom);
                    // console.log ('newUserInRoom', getUsersRoom.newUsersInRoom)
                    // const currentRoom = getUsersRoom.currentRoom;
                    // const newArrayUsers = getUsersRoom.newUsersInRoom;
                    // const currentUser = usuari.userName;


                    console.log("dades QUE SE PASSEN A UPDATEUSERSINROOM PARA MOSTRARLO EN PANRALLA", getUsersRoom.currentRoom, "NEW ARRAY USERS:", getUsersRoom.newArrayUsers, "currentUser:", usuari.userName);
                    io.emit("updateUsersInRoom", getUsersRoom.currentRoom, getUsersRoom.newArrayUsers, usuari.userName);

                } else {
                    return { status: "error", message: "No s'ha detectat la desconnexió del client" }
                }

            } catch (error) {
                result = { status: "error", message: error.message }
            }
        });
    });
};

module.exports = sockets;