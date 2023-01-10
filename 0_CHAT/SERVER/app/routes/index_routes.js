const express = require('express');
// const app = express();
const routes = express.Router();
const {authJWT, authentication} = require('../middlewares/authentication.js')
// const dbUsuaris = require('../models/dbUsuari.js');
// const dbRooms = require('../models/dbRoom');

const registerUser = require('../controllers/user/registerUserController.js');
const loginUser = require('../controllers/user/loginUserController.js');
const createRoom = require('../controllers/room/newRoomController.js');

routes.post('/register', registerUser);
routes.post('/login', authentication, loginUser);
// routes.post('/login',  loginUser);

// routes.post('/newUser', registerUser)
routes.post('/newRoom', createRoom);

module.exports = routes;