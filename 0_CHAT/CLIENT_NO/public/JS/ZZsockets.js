const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.token
    }
});

let socketConnected = false;

socket.on('connect', () => {
      
    socket.on('new-message', message => {
        displayMessage(message);
    })
    socket.on('new-join-message', message => {
        displayJoinMessage(message);
    })
    socket.on('new-room', (room, users) => {
        displayRoom(room);
        displayRoomUsers(room, users);
    })
    socket.on('update-room-users', (room, users) => {
        if (sessionStorage.roomId === room.roomId) {
            displayUsers(users)
        }
        displayRoomUsers(room, users);
    })
    socket.emit('get-rooms');
})