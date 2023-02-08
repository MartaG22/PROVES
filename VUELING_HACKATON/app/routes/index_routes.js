// const { Router } = require('express');
const express = require('express');
const app = express();
const routes = express.Router();

// const { dbJugadors, dbJugades } = require('../models/dbJoc.js');


const crearJugador = require('../controllers/playersControllers/crearJugador.js');
const modificarJugador = require('../controllers/playersControllers/modificarJugador.js');
const llistarJugador = require('../controllers/playersControllers/llistarJugador.js');

const crearJugada = require('../controllers/gamesControllers/crearJugada.js')
const esborrarJugades = require('../controllers/gamesControllers/esborrarJugades.js')
const llistarJugades = require('../controllers/gamesControllers/llistarJugades.js')

const llistarRanking = require('../controllers/rankingControllers/llistarRanking.js');
const mostrarPerdedor = require('../controllers/rankingControllers/mostrarPerdedor.js');
const mostrarGuanyador = require('../controllers/rankingControllers/mostrarGuanyador.js');


// routes.post('/players', crearJugador);
// routes.put('/players/:id', modificarJugador);
// routes.get('/players', llistarJugador);

// routes.post(`/games/:id`, crearJugada);
// routes.delete(`/games/:id`, esborrarJugades);
// routes.get(`/games/:id`, llistarJugades);

routes.get('/travel', llistarTravel);
// routes.get('/ranking/loser', mostrarPerdedor);
// routes.get('/ranking/winner', mostrarGuanyador);


module.exports = routes;