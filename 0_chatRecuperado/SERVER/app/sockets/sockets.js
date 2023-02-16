const jwt = require("jsonwebtoken");
const disconnectUser = require("../controllers/user/logoutUserController.js");

const initFirstRoom = require("../controllers/room/initRoom.js");
const createRoom = require("../controllers/room/newRoomController.js");
const getRooms = require("../controllers/room/getRoomsController.js");
const joinRoom = require("../controllers/room/joinRoomController.js");
const getUsersRoom = require("../controllers/user/getUsersController.js")
const sendMessage = require("../controllers/message/sendMessageController.js");
const getDataRoom = require("../controllers/room/getDataRoom.js");
const changeRoom = require("../controllers/room/changeRoomController.js");


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

        initFirstRoom();

        // io.emit("updateUserFirstRoom", async () => {
        //     try {
        //         let room = "Main";
        //         let enterRoom = await joinRoom(room, usuari);
        //         console.log('enterRoom en UPDATEFIRSTROOM:', enterRoom );
        //         if (enterRoom.status === "success") {
        //             const getDataFirstRoom = await getDataRoom(room);
        //             console.log('getDataFirstRoom', getDataFirstRoom);
        //             //! const data =  *****>>>> pasar a variable DATA todos los datos recibidos para que sea más legible.
        //             // console.log("DADES PER PASSAR A PUBLIC joinNewRoom", room, getDataFirstRoom.currentRoom.usersInThisRoom, usuari, getDataFirstRoom.currentRoom.message);
        //             console.log("msg:","DADES PER PASSAR A PUBLIC joinNewRoom", room, "USUARIS:", getDataFirstRoom.arrayUsersInRoom, "usuari:", usuari.userName, getDataFirstRoom.currentRoom.message);
        //             io.emit("joinFirstRoom", room, getDataFirstRoom.arrayUsersInRoom, usuari.userName, getDataFirstRoom.currentRoom.message);

        //         }
        //     } catch (error) {
        //         return { status: "error", message: error.message }
        //     }
        // })




        /* 
                socket.on("joinUserNewRoom", (room, currentUser) => {
        
                    // socket.on("joinUserNewRoom", async (room, currentUser) => {
                        try {
                            
                            console.log("ROOM I CURRENTUSER EN PUBLIC/JOINUSERNewRoom", room, currentUser)
                        } catch (error) {
                            return { status: "error", message: error.message }
                        }
                }); */




/*         socket.on("joinNewRoom", async (room) => {
            try {
                console.log("ESOTY en joinRoom CONTROLLER ---------- ROOM: ", room, usuari)

                let enterRoom = await joinRoom(room, usuari);
                // console.log('><><><><> ---- enterRoom en JOINROOM para registrar usuario nuevo:', enterRoom)
                if (enterRoom.status === "success") {
                    console.log("ADDDDDDIIIIIIIIIIIIIIIOOOOOOOOOOOSSSSSS")

                    const arrayUsersInRoom = [];
                    enterRoom.currentRoom.usersInThisRoom.forEach((user) => {
                        arrayUsersInRoom.push(user.nomUsuari);
                    });

                    const previousMessages = enterRoom.currentRoom.message;
                    console.log("previousMessages en SERVER/SOCKETs:", previousMessages)

                    console.log("joinNewRoom", room, arrayUsersInRoom, usuari.userName);
                    // io.emit("joinNewRoom", room, arrayUsersInRoom, usuari.userName);
                    io.emit("joinNewRoom", room, arrayUsersInRoom, usuari);
                }
                // } else {
                //     //! <<<***>>>   FALTA ACABAR AQUEST CONTROLOADOR  !!!!   no funciona
                //     // console.log("Aquest USUARI ja està connectat a aquesta ROOM")
                //     // return { status: "error", message: "Aquest USUARI ja està connectat a aquesta ROOM" };
                // };
            } catch (error) {
                return { status: "error", message: error };
            };
        });
 */
        socket.on("changeRoom", async (room) => {
            try {
                // console.log("ESOTY en changeROOM CONTROLLER ---------- ROOM: ", room)
                let changeUserRoom = await changeRoom(room, usuari);
                // console.log('changeUserRoom en CHANGE ROO;', changeUserRoom)
                if (changeUserRoom.status === "success") {
                    console.log("HHHHHHHHHHHHOOOOOOOOOOOOLLLLLLLLLLAAAAAAAA")

                    const arrayUsersInRoom = [];
                    changeUserRoom.findNewRoom.usersInThisRoom.forEach((user) => {
                        arrayUsersInRoom.push(user.nomUsuari);
                    });
                    // console.log('arrayUsersInRoom RROOOMMMM per passar a CLIENT/SOCKETS', arrayUsersInRoom)
                    const previousMessages = changeUserRoom.findNewRoom.message;
                    // console.log("previousMessages en SERVER/SOCKETs:", previousMessages)

                    // console.log("msg:", "DADES ABANS DE L'EMIT  JOINROOOM:", room, arrayUsersInRoom, usuari, previousMessages);
                    io.emit("joinRoom", room, arrayUsersInRoom, usuari.userName, previousMessages);

                }


            } catch (error) {
                return { status: "error", message: error };
            };
        })

        socket.on("newRoom", async (newRoomName) => {
            try {
                let createNewRoom = await createRoom({ newRoomName });
                const arrayUsersInThisRoom = [];
                const previousMessages = [];
                let newRoom, currentUser;
                // console.log('createNewRoom en SOCKET/NEWROOM', createNewRoom)
                // console.log( "HOOOOOOOOOOOOOOllllllllllllllllllAAAAAAAAAAAAA", newRoomName, currentUser)

                if (createNewRoom.status === "success") {
                    // console.log("SALA CREADA OK");
                    // console.log("CREATEN NEW ROOOM EN SOCKET/NEWOROOM", createNewRoom);
                    //    let usersInThisRoom = await getUsers(createNewRoom);
                    const room = createNewRoom.newRoom.roomName;
                    // console.log('arrayUsersInThisRoom para pasar a joinenwroom del FRONT***', arrayUsersInThisRoom)
                    // const previousMessages = createNewRoom.newRoom.message;
                    // console.log("usersInThisRoom", usersInThisRoom);
                    // console.log("<><<>><<>><<>>ROOM I CURRENTUSER EN PUBLIC/JOINUSERNewRoom", room, currentUser)
                    // console.log(
                    //     "DADES PER PASSAR A PUBLIC, DESDE SOCKET/NEWROOM:",
                    //     "NOM SALA:", createNewRoom.newRoom.roomName,
                    //     "USERS IN ROOM:", arrayUsersInThisRoom,
                    //     "USUARI:", usuari,
                    //     'previousMessages', previousMessages
                    // )
                    const joinNewRoom = await joinRoom(room, usuari);
                    // console.log('joinNewRoom a ver si funciona', joinNewRoom)
                    if (joinNewRoom.status === "success") {
                        console.log("-+-+HHHHHHHHHHHHOOOOOOOOOOOOLLLLLLLLLLAAAAAAAA")
                        // con
                        console.log('-------------****createNewRoom antes de hacer el EMIT', createNewRoom);

                        arrayUsersInThisRoom.push(usuari.userName);
                        // previousMessages = createNewRoom.newRoom.message;
                        console.log("msg:", "ROOOM:", createNewRoom.newRoom.roomName, "array:", arrayUsersInThisRoom, usuari.userName, 'MENSAJES PREVIOS:', previousMessages)
                        newRoom = createNewRoom.newRoom.roomName;
                        // currentUser = usuari;
                        console.log("msg:", "ROOOM:", newRoom, "array:", arrayUsersInThisRoom, usuari, 'MENSAJES PREVIOS:', previousMessages)
                        io.emit("joinNewRoom", newRoom, arrayUsersInThisRoom, usuari)
                        // usuari.userName, previousMessages);

                        // console.log("**************    joinNewRoom antes de hacer el EMIT JOINNEWROOM", createNewRoom.roo, arrayUsersInThisRoom, usuari, previousMessages);

                    // const data = {
                    //     room: createNewRoom.newRoom.roomName,
                    //     arrayUsersInThisRoom: createNewRoom.newRoom.usersInThisRoom,
                    //     usuari,
                    //     previousMessages: createNewRoom.newRoom.message,
                    // };

                    // console.log('data', data)
                    // io.emit("getRooms", createNewRoom); // FALTARIA AFEGIR ELS USUARIS i acabar el controller!!!
                    // socket.on('joinNewRoom', async (room, usersInThisRoom, currentUser, previousMessages) => {
                        // io.emit("aaa", createNewRoom.newRoom.roomName, arrayUsersInThisRoom, usuari, previousMessages);
                        // io.emit("aaa", createNewRoom.newRoom)
                        // io.emit("joinNewRoom", createNewRoom.newRoom.roomName, arrayUsersInThisRoom, usuari, previousMessages);
                        // io.emit("joinNewRoom", room, arrayUsersInThisRoom, usuari.userName, previousMessages)
                        // arrayUsersInThisRoom, usuari, previousMessages);
                        
                        // io.emit("joinNewRoom", data);
                        // io.emit("aaa", createNewRoom);
                    }
                };
            } catch (error) {
                return { status: "error", message: error };
            };
        });



        socket.on("getRooms", async () => {
            // initRoom();
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
