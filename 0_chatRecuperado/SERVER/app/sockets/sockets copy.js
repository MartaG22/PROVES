const jwt = require("jsonwebtoken");
const disconnectUser = require("../controllers/user/logoutUserController.js");

const initFirstRoom = require("../controllers/room/initRoom.js");
const createRoom = require("../controllers/room/newRoomController.js");
const getRooms = require("../controllers/room/getRoomsController.js");
const joinRoom2 = require("../controllers/room/joinRoomController.js");
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

        const usuari = {
            userId: socket.decoded.idUsuari,
            userName: socket.decoded.nomUsuari,
        };


        initFirstRoom();



        socket.on("changeRoom", async (room) => {
            try {
                let changeUserRoom = await changeRoom(room, usuari);
                if (changeUserRoom.status === "success") {

                    const arrayUsersInRoom = [];
                    changeUserRoom.findNewRoom.usersInThisRoom.forEach((user) => {
                        arrayUsersInRoom.push(user.nomUsuari);
                    });
                    const previousMessages = changeUserRoom.findNewRoom.message;

                    io.emit("joinRoom", room, arrayUsersInRoom, usuari.userName, previousMessages);
                
                };

            } catch (error) {
                return { status: "error", message: error };
            };
        });



        socket.on("newRoom", async(newRoomName) => {

            try {
                const createNewRoom = await createRoom({newRoomName, usuari});
                
//! PARA QUE NO ME REPITA EL NOMBRE Y NO GRABE EN LA NEW ROOM EL NOMBRE DEL USUARIO , LO TENGO QJE BORRRAR DE JOINROOM2

                if (createNewRoom.status === "success"){
                    const room =  createNewRoom.newRoom.roomName;
                    const joinNewRoom = await joinRoom2(room, usuari);
                    console.log(joinNewRoom)

                    if (joinNewRoom.status === "success") {
                        const arrayUsersInRoom =  [usuari.userName];
                        io.emit('userNewRoom', room, arrayUsersInRoom, usuari);
                    };
                };
            } catch (error) {
                return { status: "error", message: error };
            };
        });






        socket.on("getRooms", async () => {

            try {
                let currentCreatedRooms = await getRooms();
                let countRooms = currentCreatedRooms.currentRooms.length;
                let arrayCurrentRooms = [];

                if (currentCreatedRooms.status === "success") {
                    for (let i = 0; i < countRooms; i++) {
                        let roomName =
                            currentCreatedRooms.currentRooms[i].roomName;
                        arrayCurrentRooms.push(roomName);
                    };

                    io.to(socket.id).emit("newRoom", arrayCurrentRooms);
                } else {
                    io.to(socket.id).emit("error", currentCreatedRooms.error);
                };
            } catch (error) {
                return { status: "error", message: error };
            };
        });


        socket.on('newMessage', async (newMessage, room) => {
            try {
                const sendNewMessage = await sendMessage(newMessage, usuari, room.roomName);

                if (sendNewMessage) {
                    const arrayUsersInRoom = await getUsersRoom(room.roomName);
                    io.emit("sendMessage", sendNewMessage, usuari, room.roomName, arrayUsersInRoom);
                };

            } catch (error) {
                return { status: "error", message: error };
            };
        });







        socket.on("disconnect", async () => {
            try {
                let getUsersRoom = await disconnectUser(usuari);

                if (getUsersRoom.status === "success") {

                    socket.leave(getUsersRoom.currentRoom)
                    io.emit("updateUsersInRoom", getUsersRoom.currentRoom, getUsersRoom.newArrayUsers, usuari.userName);
                    socket.broadcast.to(getUsersRoom.currentRoom).emit('newDataMessage', message = `${usuari.userName} left the room`);
                    socket.broadcast.to(getUsersRoom.currentRoom).emit('newDataMessage', usuari.userName);

                } else {
                    return { status: "error", message: "No s'ha detectat la desconnexió del client" }
                };

            } catch (error) {
                result = { status: "error", message: error.message }
            };
        });
    });
};

module.exports = sockets;