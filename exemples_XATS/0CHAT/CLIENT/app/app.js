//!  EJEMPLOS EN GITHUB
// https://github.com/topics/socket-io-chat-app
// https://github.com/topics/nodejs-chat-app
//! https://www.youtube.com/watch?v=0wqteZNqruc

// https://www.youtube.com/watch?v=DBr5Ksnkt24
// https://unipython.com/crear-un-chat-con-nodejs-y-socketio/
//busqueda google    https://www.google.com/search?q=chat+nodejs+socket+io+con+css+y+html&rlz=1C1ONGR_esES1016ES1016&oq=chat+nodejs+socket+io+con+css+y+html+&aqs=chrome..69i57j69i59.12257j0j4&sourceid=chrome&ie=UTF-8
//CON ESTRUCTURA CARPETAS GUAY  >>>> https://hugorocaproyectos.js.org/post/2019-06-30-app-chat-express-socket.io-mongodb-bluebird/

// https://www.youtube.com/watch?v=0wqteZNqruc&t=21s
// SENCILLO >>>> https://www.youtube.com/watch?v=7b79DwrDY5U
// https://www.freecodecamp.org/news/create-a-professional-node-express/
// https://ull-esit-dsi-1617.github.io/estudiar-las-rutas-en-expressjs-alejandro-raul-35l2/rutasexpressjs.html



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

      socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
      });

      socket.on('chatMessage', (data) => {
            console.log(data);
            io.sockets.emit('chatMessage', data)
      });
});



