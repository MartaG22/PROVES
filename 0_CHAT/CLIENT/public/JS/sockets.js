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
    // console.log("SOCKET.ID en CLIENT/SOCKETS", socket)

    socket.on('newRoom', (newRoomName) => {
        console.log("newRoom", newRoomName);
        showRoom(newRoomName);
    })


    socket.emit("getRooms");
    // console.log(arrayCurrentRooms)


    socket.on('joinNewRoom', async(room, arrayUsers, currentUser) => {
        console.log("Han arribat aquestes dades:", room, arrayUsers, currentUser)
        showUsers(room, arrayUsers, currentUser);
        
        // if (sessionStorage.roomId === room.roomId) {
        // }



        const newMessage = await sendMessage();
        console.log("NOU MISSATGE", newMessage);
        if (newMessage) {

            // socket.emit('newMessage', newMessage)

        };
        
        // socket.emit('messageController', (room, arrayUsers, currentUser) => {
        //     // sendMessage(newMessageUser);
        //     console.log(newMessageUser)
        // });

    });




    
    // socket.on('disconnect', async () => {
    //     l
    // })
} )