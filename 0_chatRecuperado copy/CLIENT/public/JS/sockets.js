const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.getItem('token')
    }
});

let socketConnected = false;
console.log('sessionStorage.token:', sessionStorage.token)
console.log('sessionStorage.token:', sessionStorage)


// socket.on('newRoom', (newRoomName) => {
//     console.log("-.-.-.newRoom en PUBLIC/SOCKET.ON", newRoomName);
//     console.log("*<.>*<.>*<.>*BUSCANDP EL ERROR en JOINNEWROOM 222:", arrayRooms)

//     showRoom(newRoomName);
// })

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



    // socket.on('joinNewRoom', async (room, usersInThisRoom, currentUser, previousMessages) => {
    //     console.log("Ha8n arribat aquestes dades a CLIENT/JOINNEWROOM:", room, usersInThisRoom, currentUser, previousMessages)
    //     if (room == "Main") {

    //         const arrayRooms = [];
    //         arrayRooms.push(room);
    //         console.log("*<.>*<.>*<.>*BUSCANDP EL ERROR en JOINNEWROOM 111:", arrayRooms)
    //         showRoom(arrayRooms);
    //         joinNewRoom(room);
    //         showUsers(room, usersInThisRoom, currentUser.userName);
    //         showMessages(previousMessages, currentUser, usersInThisRoom);
    //     } else {
    //         showUsers(room, usersInThisRoom, currentUser.userName);
    //         showMessages(previousMessages, currentUser, usersInThisRoom);

    //     }

    // });

    socket.on('joinNewRoom', async (room, usersInThisRoom, currentUser, previousMessages) => {
        console.log("Han arribat aquestes dades a CLIENT/JOINNEWROOM:", room, usersInThisRoom, currentUser, previousMessages)

        showUsers(room, usersInThisRoom, currentUser.userName);
        showMessages(previousMessages, currentUser, usersInThisRoom);


        socket.on("joinRoom", async (room, usersInThisRoom, currentUser, previousMessages) => {
            console.log("Han arribat aquestes dades a CLIENT/JOINNEWROOM:", room, usersInThisRoom, currentUser, previousMessages)
            // showRoom(arrayRooms);
            showUsers(room, usersInThisRoom, currentUser.userName);
            showMessages(previousMessages, currentUser, usersInThisRoom);

        })
    });


    // socket.on("updateUsersInRoom", (usuari, room, arrayUsers) => {
    socket.on("updateUsersInRoom", (room, arrayUsers, usuari) => {

        // console.log (room, arrayUsers, usuari);
        showUsers(room, arrayUsers, usuari); //PONERLO BIEN
    })


    socket.on('sendMessage', (newMessage, usuari, room, arrayUsersInRoom) => {
        console.log("dades rebudes en public/SENDMESSAGE ", "newMessage:", newMessage, "usuari:", usuari, "room", room)
        showNewMessage(newMessage, usuari, room);
    })

})