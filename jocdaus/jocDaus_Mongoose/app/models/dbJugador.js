const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/jocDaus')

const db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err)
})

db.once('open', function () {
  console.log('Connection to DB successful')
})

const jugador = new Schema(
  {
    idJugador: { type: Number },
    nomJugador: { type: String, trim: true },
    tiradesJugador: { type: Number, default: 0 },
    tiradesGuanyades: { type: Number, default: 0 },
    percentatgeExit: { type: Number, default: 0 },
  },
  { timestamps: true },

);

module.exports = mongoose.model('Jugador', jugador);