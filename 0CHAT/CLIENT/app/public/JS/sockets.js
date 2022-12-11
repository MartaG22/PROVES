const server = require('../../app.js');

const express = require ('express');
const SocketIO = require('socket.io');
const io = SocketIO.listen(server);

// WEBSOCKETS

io.on('connection', () => {
      console.log('new connection ');
})