// https://www.youtube.com/watch?v=MYqpw0P31ms
//!CREAR EL SERVIDOR CON EL SOCKET 

const express = require ('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
  console.log("Un usuari s'ha connectat");

  socket.on('chat', (msg) => {
    console.log("Mensaje: " + msg)
  })
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  })
















/*
const express = require('express');
const app = express();
const PORT = 3000;

const SocketIO = require('socket.io');
const io = SocketIO(server);
const http = require('http');

// const Server  = require('socket.io');
// const http = require('http');

//settings
app.set('port', process.env.PORT || PORT);





// start the server
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

const Server  = require('socket.io');
const http = require('http');

// const server = http.Server .createServer(app);
// const httpServer = server.listen(3000);
// const io = new Server(httpServer);

// server.listen(3000)
// console.log('Server is running on port 3000')


// const io = new Server(http)


// app.listen(3000)
*/