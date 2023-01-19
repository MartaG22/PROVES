const jwt = require("jsonwebtoken");
// const registerUserController = require("../controllers/user/loginUserController.js");
// const loginUserController = require("../controllers/user/registerUserController.js");
const createRoom = require("../controllers/room/newRoomController.js");

// const SocketIO = require("socket.io");
// const io = SocketIO.listen(server);

const sockets = async (io) => {
    
    io.use(function (socket, next) {
        console.log("MIDDLEWARE SOCKETS")
        if (socket.handshake.query && socket.handshake.query.token) {
            console.log(socket.handshake.query.token)
            jwt.verify(
                socket.handshake.query.token,
                process.env.ACCESS_TOKEN_KEY,
                function (error, decoded) {
                    if (error) return next (new Error ("Authentication error"));
                    socket.decoded = decoded;
                    next();
                }
            );
        } else {
            throw (new Error ('Authenticatoin error'));
        }
    });

    io.on ("connection", async (socket) => {

        console.log("Nou usuari connectat");
        console.log("SOCKET:", socket);



        // const usuari = {

        //     userId: socket.decoded.userId,
        //     userName: socket.decoded.userName,

        //     // userId: socket.decoded.idUsuari,
        //     // userName: socket.decoded.nomUsuari,
        // };

        // console.log (`USUARI ${usuari} connected`);

        // socket.on ('newRoom', async (roomName) => {
        //     let createNewRoom = await createRoom(roomName);

        //     if (createNewRoom.status === "success") {
        //         console.log("SALA CREADA OK")
        //     }
        // })



    })



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
