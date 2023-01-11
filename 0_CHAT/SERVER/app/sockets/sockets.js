// const jwt = require("jsonwebtoken");
// const registerUserController = require("../controllers/user/loginUserController.js");
// const loginUserController = require("../controllers/user/registerUserController.js");
const createRoomController = require("../controllers/room/newRoomController.js");

const SocketIO = require("socket.io");
// const io = SocketIO.listen(server);

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

module.exports = sockets;
