const Marcador = require("./marcador");

class Jugador {
    constructor(idJugador, nomJugador) {
        this.idJugador = idJugador;
        this.nomJugador = nomJugador;
        // this.punts = 0;
    };
};


//! creo que los PUNTOS se tiienen que extender de la clase Marcador para poder dar bien el resultado
module.exports = Jugador;