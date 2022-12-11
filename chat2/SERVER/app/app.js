// https://www.youtube.com/watch?v=p-OevzBqHyQ
// https://socket.io/get-started/chat
// https://ull-esit-dsi-1617.github.io/estudiar-las-rutas-en-expressjs-alejandro-raul-35l2/rutasexpressjs.html#using-middleware
// https://www.oscarblancarteblog.com/2018/01/16/implementar-json-web-tokens-nodejs/
// https://carlosazaustre.es/autenticacion-con-token-en-node-js
//! implementar jsonwebtoken en nodejs
// https://www.youtube.com/watch?v=jD7FnbI76Hg&t=1339s    <<<>>>   https://github.com/xaviercomi/xat   (ejemplo)
// EJEMPLOS:
// https://github.com/JoanUniverse/QuePassaEh  (ejemplo)
// https://github.com/albert688/xat




//! https://www.youtube.com/watch?v=p-OevzBqHyQ
//? chat template  css   \\\***///! BUSCARRRR

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

  // socket.on('disconnect', () => {
  //   console.log("Un usuari s'ha desconnectat");
  // })

  socket.on('chat', (msg) => {
    io.emit('chat', msg)
  })
})



app.get('/', (req, res) => {
  // res.send('<h1> Aplicación de CHAT </h1>')
  // const path =__dirname;
  // const path = require('../../CLIENT/index.html')
  console.log(__dirname)
  res.sendFile(`${__dirname}/CLIENT/index.html`)
  // res.sendFile(`${path/index.html}`)
  // res.sendFile(path)

})



server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
})





// //? https://www.youtube.com/watch?v=otaQKODEUFs
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const mongoose = require('mongoose');
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });




/* const express = require('express');
const app = express();
// const file = require('./CLIENTE/index.html')
const http = require('http');
const server = http.createServer(app);


const {Server} = require('socket.io');
const io = new Server(server);


io.on('connection', (socket) => {
    // console.log('Un usuario se ha conectado');

    // socket.on('disconnect', () => {
    //     console.log('Un usuario se ha desconectado');
    // })

    // socket.on('chat', (missatge) => {
    //     console.log("Mensaje:" + missatge)
    // })

    socket.on("chat", (missatge) => {
        io.emit("chat", missatge)
    })


})



app.get('/', (req, res) => {
    // res.send('<h1> Aplicació de XAT <h1/>')
    // console.log(__dirname);
    res.sendFile(`${__dirname}/CLIENTE/index.html`)
})

server.listen(3000, () => {
    console.log('Servidor inicializado en http://localhost:3000')
}); */