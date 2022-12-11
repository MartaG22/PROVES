const Joc = require('./joc.js');
const Jugador = require('./jugador.js');
const marcador = require('./marcador.js');

const joc1 = new Joc('Set i Mig');
const joc2 = new Joc('Remigio');
const joc3 = new Joc('Parxís');
const joc4 = new Joc('Dòmino');

const arrayJocs = [joc1, joc2, joc3, joc4];


// Afegim jugadors:
const jugador1 = new Jugador(1, "Pepito");
const jugador2 = new Jugador(2, "María");
const jugador3 = new Jugador(3, "Juanito");
const jugador4 = new Jugador(4, "Ramón");
const jugador5 = new Jugador(5, "Maricarmen");
const jugador6 = new Jugador(6, "Inés");
const jugador7 = new Jugador(7, "Andreu");
const jugador8 = new Jugador(8, "Antonio");

const arrayJugadors = [jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8];


// Afegim jugadors als jocs:
arrayJocs[0].afegirJugadorAlJoc(jugador1, jugador2, jugador3, jugador6, arrayJocs[0].nomJoc);
arrayJocs[1].afegirJugadorAlJoc(jugador5, jugador6, jugador7, jugador2, arrayJocs[1].nomJoc);
arrayJocs[2].afegirJugadorAlJoc(jugador8, jugador1, jugador7, jugador4, arrayJocs[2].nomJoc);
arrayJocs[3].afegirJugadorAlJoc(jugador3, jugador4, jugador5, jugador8, arrayJocs[3].nomJoc);



function iniciarJoc() {
      for (let i = 0; i < 8; i++) {  // 8 rondes de joc
            let ronda = i + 1;
            console.log(`\nRONDA ${ronda}: `);
            arrayJocs.forEach(joc => {
                  let quantitatJugadors = joc.jugadors.length;
                  let posicioJugador = parseInt(Math.random() * quantitatJugadors);
            });
            
      }
      
      // Joc.resultatFinal();
}
