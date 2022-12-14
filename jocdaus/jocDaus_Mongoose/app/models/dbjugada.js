const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tirada = new Schema(
    {
        _$oid: {},   // TODO  falta hacer el ID con auto-increment
        idJugada: { type: Number },
        tiradaDau1: { type: Number, min: 1, max: 6 },
        tiradaDau2: { type: Number, min: 1, max: 6 },
        partidaGuanyada: { type: Boolean },
        idJugador: { type: Number}
    }
);

module.exports = mongoose.model('Jugade', tirada);