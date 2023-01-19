// const newRoom = require("../../../SERVER/app/controllers/room/newRoomController");

const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.getItem('token')
    }
});

let socketConnected = false;
console.log(sessionStorage.token)
console.log("estic a CLIENT/PUBLIC/JS/SOCKET.JS")

socket.on('connect', () => {
    console.log("SOCKET.ID", socket.id)

    socket.on('newRoom', (room) => {
        console.log("newRoom", room);
        newRoom(room);

    })
} )