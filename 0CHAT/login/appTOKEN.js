//!   INSTALAR MÓDULO jSON WEB TOKEN  i  BODY-PARSER:
//!   npm i  jsonwebtoken   /   npm i body-parser
// https://www.youtube.com/watch?v=UymGJnv-WsE
// https://www.youtube.com/watch?v=d6arCMBlEgI


// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/CLIENTE/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


//!  PARA CREAR EL JSON WEB TOKEN:
let jwt = require('jsonwebtoken');
let bodyParser = require('body-parser');
const { rmSync } = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '10mb'}));

app.post('/login', (req, res) => {
  let username = req.body.user;
  let password = req.body.password;
  console.log("username:", username,  "///   password:", password);
  if( username !== 'Marta' || password !== '1234' ){  // verificar si existe en nuestra base de datos de usuarios
    res.status(401).send({
      error: 'usuario o contraseña inválidos'
    })
    return;
  };

  let tokenData = {
    username: username
  };

  let token = jwt.sign(tokenData, 'Secret Password', {
      expiresIn: 60 * 60 * 24   // Expira en 24 horas.
  });
  console.log(token)   //!  CREO QUE LO TENEMOS QUE GUARDAR EN LA BASE DE DATOS
  res.send({
    token
  })

})

//!  PARA AUTENTICARNOS MEDIANTE TOKENS:
app.get('/secure', (req, res) => {
  let token = req.headers['authorization'];
  if(!token) {
    res.status(401).send({
      error: "Es necesario el token de autenticación"
    });
    return;
  };

  token = token.replace('Bearer ', '');

  jwt.verify(token, 'Secret Password', function(err,user) {
    if(err) {
      res.status(401).send({
        error: 'Token inválido'
      });
    } else {
      console.log(" TE HAS AUTENTICADO!!! \n TOMA YAAA!!!!")
      res.send({message:  "TE HAS AUTENTICADO!!!    TOMA YAAA!!!!"})
    };
  });

});




app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/CLIENTE/index.html`);
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//   });
// });

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

// io.emit('some event', {
//   someProperty: 'some value', otherProperty: 'other value'
// }); // This will emit the event to all connected sockets

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



server.listen(3000, () => {
  console.log('listening on *:3000');
});