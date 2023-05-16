const express = require('express');

const routes = express.Router();
const {authJWT, authentication} = require('../middlewares/authentication.js')


const registerUser = require('../controllers/user/registerUserController.js');
const loginUser = require('../controllers/user/loginUserController.js');


routes.post('/register', registerUser);
routes.post('/login', authentication, loginUser);


module.exports = routes;