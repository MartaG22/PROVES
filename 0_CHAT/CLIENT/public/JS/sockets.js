const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.token
    }
});

let socketConnected = false;

socket.on('connect', () => {
    console.log("SOCKET.ID", socket.id)

    socket.on('newRoom', (room) => {
        console.log("newRoom", room)
    })
} )