'use strict';

require('dotenv').config();
const dbTravel = require("./models/dbTravels.js");

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

