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
    console.log("SOCKET.ID en CLIENT/SOCKETS", socket.id)

    socket.on('newRoom', (newRoomName) => {
        console.log("newRoom", newRoomName);
        newRoom(newRoomName);

    })

    // socket.on('disconnect', async () => {
    //     l
    // })
} )