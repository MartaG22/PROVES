// const newRoom = require("../../../SERVER/app/controllers/room/newRoomController");

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
    // console.log(arrayCurrentRooms)
    
    
    socket.on('joinNewRoom', async(room, usersInThisRoom, currentUser, previousMessages) => {
        console.log("Han arribat aquestes dades a CLIENT/JOINNEWROOM:", room, usersInThisRoom, currentUser, previousMessages)
        
        // sessionStorage.roomId == data.currentUser.idUsuari;
        // sessionStorage.roomName == room.id;



        
        // showUsers(room, usersInThisRoom, currentUser, previousMessages);
        //! la part comentada abaix és la part  que havia avançant i no funciona:
        console.log('<<<<<< >>>>>>>>>>>>>>>>> currentUser en SOCKETS/joinNEWROOM', currentUser)
        showUsers(room, usersInThisRoom, currentUser.userName);

        // showMessages(previousMessages, currentUser)
        showMessages(previousMessages, currentUser, usersInThisRoom);




        //! sessionStorage.roomId === room.roomId;
        // if (sessionStorage.roomId === room.roomId) {
        // }


        // const newMessage = sendMessage(room, arrayUsers, currentUser);
        // const newMessage = sendMessage();
        // console.log("NOU MISSATGE", newMessage);


        // if (newMessage) {

        //     // socket.emit('newMessage', newMessage)
        // };
        
        // socket.emit('messageController', (room, arrayUsers, currentUser) => {
        //     // sendMessage(newMessageUser);
        //     console.log(newMessageUser)
        // });

    });

    // socket.on("updateUsersInRoom", (usuari, room, arrayUsers) => {
    socket.on("updateUsersInRoom", (room, arrayUsers, usuari) => {

        console.log (room, arrayUsers, usuari);
        //! HASTA AQUÍ LLEGAN BIEN LOS DATOS. HAY QUE IMPRIMIRLOS EN PANTALLA
        showUsers(room, arrayUsers, usuari); //PONERLO BIEN
        //! ver si funciona. He quitado el previousMessages. aqui no hace falta enseñar mensajes.
        //! tendría que hacer otra llamada desde donde haga falta a SHOWMESSAGES. Ponerlo separada
        // if (sessionStorage.)
    })


    // socket.on('displayMessage', (newMessage, usuari, room) => {
    //     console.log("DADES REBUDES EN CLIENTS/SOCKETS", newMessage, usuari, room);
    //     displayNewMessage(newMessage, usuari, room);
    // })

    // socket.on(`newMessage`, () => {})




    
    // socket.on('disconnect', async () => {
    //     l
    // })
} )