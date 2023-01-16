const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.token
    }
});

// socket.on('connection', () => {
//     socket.on('newRoom', (room) => {
//         console.log("newRoom", room)
//     })
// } )