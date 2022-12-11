//!  EJEMPLOS EN GITHUB
// https://github.com/topics/socket-io-chat-app
// https://github.com/topics/nodejs-chat-app


const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

//settings
app.set('port', process.env.PORT || PORT);

// static files Middleware
app.use(express.static(`${__dirname}/public`))


app.get('/', (req, res) => {
      res.sendFile(path.join(`${__dirname}/public/HTML/index.html`));
})


// start the server
const server = app.listen(app.get('port'), () => {
      console.log('Server on port', app.get('port'));
});


//! se tendrá que separar esta parte de sockets en otro archivo!!!
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
      console.log(`New connection ${socket.id}`);

      socket.on('chatMessage', (data) => {
            console.log(data);
            io.sockets.emit('chatMessage', data)
      })
});



// module.exports = server;