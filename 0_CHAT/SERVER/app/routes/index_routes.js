const express = require('express');
// const app = express();
const routes = express.Router();

// const dbUsuaris = require('../models/dbUsuari.js');
// const dbRooms = require('../models/dbRoom');

const registerUser = require('../controllers/user/registerUserController.js');
const loginUser = require('../controllers/user/loginUserController.js');
const createRoom = require('../controllers/room/createRoomController.js');

routes.post('/register', registerUser)
// routes.post('/newUser', registerUser)
// routes.post('/newRoom', createRoom);

module.exports = routes;