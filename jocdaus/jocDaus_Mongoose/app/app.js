'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const db = require("./models/dbJugador.js");

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const routes = require('./routes/index_routes.js')
const port = process.env.PORT || 3000;


app.use('/', routes);

app.listen(port, () => {
    console.log(`API REST inicialitzant en http://localhost: ${port}`)
});


// [x]  routes.post('/players', crearJugador);
// [x]  routes.put('/players/:id', modificarJugador);
// [x]  routes.get('/players', llistarJugadors);

// [x]  routes.post(`/games/:id`, crearJugada);
// [x]  routes.delete(`/games/:id`, esborrarJugades);
// [x]  routes.get(`/games/:id`, llistarJugades);


// [x]  routes.get('/ranking', llistarRanking);
// [x]  routes.get('/ranking/loser', mostrarPerdedor);
// [x]  routes.get('/ranking/winner', mostrarGuanyador);
