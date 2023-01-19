const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.token
    }
});

let socketConnected = false;

socket.on('connect', () => {
    console.log("estic a CLIENT/PUBLIC/JS/SOCKET.JS")
    console.log("SOCKET.ID", socket.id)

    socket.on('newRoom', (room) => {
        console.log("newRoom", room);
        displayRoom(room);

    })
} )