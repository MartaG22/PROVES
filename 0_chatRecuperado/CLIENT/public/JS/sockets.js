const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.getItem('token')
    }
});

let socketConnected = false;
// console.log('sessionStorage.token:', sessionStorage.token)
// console.log('sessionStorage.token:', sessionStorage)


// socket.on('newRoom', (newRoomName) => {
//     console.log("-.-.-.newRoom en PUBLIC/SOCKET.ON", newRoomName);
//     console.log("*<.>*<.>*<.>*BUSCANDP EL ERROR en JOINNEWROOM 222:", arrayRooms)

//     showRoom(newRoomName);
// })

socket.on('connect', async () => {
    // console.log("SOCKET.ID en CLIENT/SOCKETS", socket.id)
    // console.log("SOCKET.ID en CLIENT/SOCKETS", socket)

    socket.on('newRoom', (newRoomName) => {
        console.log("newRoom", newRoomName);
        showRoom(newRoomName);
    })


    await socket.emit("getRooms");


    socket.on('showRooms', (arrayCurrentRooms) => {
        console.log('DATOS RECIBIDOS EN  arrayCurrentRooms EN SHOWROOMS', arrayCurrentRooms)
        showRoom(arrayCurrentRooms);
    });


    socket.on('newDataMessage', (message) => {
        console.log("MMMEESSSSEEEEEEEEEFFFFFFFFFFFFAAAAAAAFGGEEE", message)
        showDataMessage(message);

    })

    socket.on('userNewRoom', (room, arrayUsersInRoom, usuari) => {
        console.log("HHHHHHHHHHHHOOOOOOOOOOOOLLLLLLLLLLAAAAAAAA --- aaaaaaaaaaaaaddddddddddiiiiiiiiiiooooooos");
        // console.log("DADES REBUDES EN aVER", "room:", room, "usuari:", usuari);
        // const usersInThisRoom = [usuari.userName];
        // console.log('usersInThisRoom:', usersInThisRoom);
        console.log("dades enr a AVER para envar a SHOWUSERS:", "RROOMM:", room, "usersInThisRoom:", arrayUsersInRoom, "USUARI:", usuari)
        showNewRoom(room);
        showUsers(room, arrayUsersInRoom, usuari.userName);
        showUserNewRoom(room, usuari);

    });

    

    socket.on("joinRoom", async (room, usersInThisRoom, currentUser, previousMessages) => {
        console.log("Han arribat aquestes dades a CLIENT/JOINNEWROOM:", room, usersInThisRoom, currentUser, previousMessages)
        // await showRoom(arrayRooms);

        // await showUsersChangeRoom(room, usersInThisRoom, currentUser.userName);
        showUsers(room, usersInThisRoom, currentUser);
        await showMessages(room, previousMessages, currentUser, usersInThisRoom);
        // socket.emit("joinUserNewRoom", room, currentUser);
    })


    socket.on("updateUsersInRoom", (room, arrayUsers, usuari) => {

        // console.log (room, arrayUsers, usuari);
        showUsers(room, arrayUsers, usuari); //PONERLO BIEN
    })


    socket.on('sendMessage', async (newMessage, usuari, room, arrayUsersInRoom) => {
        console.log("dades rebudes en public/SENDMESSAGE ", "newMessage:", newMessage, "usuari:", usuari, "room", room)
        await showNewMessage(newMessage, usuari, room);
    })

})