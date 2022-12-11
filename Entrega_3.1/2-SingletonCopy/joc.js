const Jugador = require('./jugador.js');
const marcador = require('./marcador.js');
const modificarPunts = require('./helper/modificarPunts.js');

class Joc {
      constructor(nomJoc) {
            this.nomJoc = nomJoc;
            this.jugadors = [];
      };

      afegirJugadorAlJoc(jugador1, jugador2, jugador3, jugador4, nouJoc) {
            this.jugadors.push(jugador1, jugador2, jugador3, jugador4);
            marcador.joc = nouJoc;
            marcador.jugadors = this.jugadors;
            this.jugadors.forEach((jugador) => {    // Inicialitzem el marcador de cada jugador a 0 punts.
              jugador.punts = 0;
            });
        
      };

      canviarPuntsJoc(posicioJugador) {
            let puntsAModificar = 0;
            let missatge;
            puntsAModificar = modificarPunts();
            if (puntsAModificar > 0) {
              missatge = `S'han sumat ${puntsAModificar} punts`;
            } else {
              missatge = `S'han restat ${-puntsAModificar} punts`;
            }

            this.jugadors[posicioJugador].punts += puntsAModificar;
            let puntsJugadorJoc = this.jugadors[posicioJugador].punts;
            console.log(` JOC: ${this.nomJoc} ==>> ${missatge} al jugador ${this.jugadors[posicioJugador].nomJugador}`);
            console.log("marcador joc:", this.nomJoc, this.jugadors)           

            if (puntsJugadorJoc < 0) {
                  // marcador.punts = 0;
                  this.jugadors[posicioJugador].punts = 0;
                }
            
      };

      resultatFinal(arrayJugadors) {
            
      };
};

module.exports = Joc;