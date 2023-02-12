const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.getItem('token')
    }
});

let socketConnected = false;
console.log('sessionStorage.token:', sessionStorage.token)
console.log('sessionStorage.token:', sessionStorage)



socket.on('connect', () => {
    console.log("SOCKET.ID en CLIENT/SOCKETS", socket.id)
    console.log("SOCKET.ID en CLIENT/SOCKETS", socket)

    socket.on('newRoom', (newRoomName) => {
        console.log("newRoom", newRoomName);
                showRoom(newRoomName);
    })
    
    
    socket.emit("getRooms");
    
    
    socket.on('joinNewRoom', async(room, usersInThisRoom, currentUser, previousMessages) => {
        console.log("Han arribat aquestes dades a CLIENT/JOINNEWROOM:", room, usersInThisRoom, currentUser, previousMessages)
        
        showUsers(room, usersInThisRoom, currentUser.userName);
        showMessages(previousMessages, currentUser, usersInThisRoom);

    });

    // socket.on("updateUsersInRoom", (usuari, room, arrayUsers) => {
    socket.on("updateUsersInRoom", (room, arrayUsers, usuari) => {

        console.log (room, arrayUsers, usuari);
        showUsers(room, arrayUsers, usuari); //PONERLO BIEN
    })


    socket.on('sendMessage', (newMessage, usuari, room, arrayUsersInRoom) => {
        showNewMessage(newMessage, usuari, room);
    })

} )