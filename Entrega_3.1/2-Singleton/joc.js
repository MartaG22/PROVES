const Jugador = require("./jugador.js");
const marcador = require("./marcador.js");
const modificarPunts = require("./helper/modificarPunts.js");

class Joc {
  constructor(nomJoc) {
    this.nomJoc = nomJoc;
    this.jugadors = [];
  }

  // class Joc {
  //     constructor(joc, nomJoc) {
  //         this.joc = {
  //             nomJoc: nomJoc,
  //             jugadors: []
  //         }
  //     }

  afegirJugadorAlJoc(jugador1, jugador2, jugador3, jugador4, nouJoc) {
    // console.log(jugador1, jugador2, jugador3, jugador4)
    // console.log(nouJoc)

    // console.log("hola adios hola adios hola")
    // this.jugadors.push([{jugador1, punts: 0}, {jugador2, punts: 0}, {jugador3, punts: 0}, {jugador4, punts: 0}]);
    this.jugadors.push(jugador1, jugador2, jugador3, jugador4);
    marcador.joc = nouJoc;
    marcador.jugadors = this.jugadors;
    this.jugadors.forEach((jugador) => {    // Inicialitzem el marcador de cada jugador a 0 punts.
      jugador.punts = 0;
    });
    // marcador.jugadors[0].punts = 0
    // marcador.jugadors[1].punts = 0
    // marcador.jugadors[2].punts = 0
    // marcador.jugadors[3].punts = 0
    console.log("AQSWDEFRGTYHYJUIU;MNFd", marcador.joc, marcador.jugadors);

    // console.log(`Jugadors afegits al joc  *** ${this.nomJoc}, amb marcador 0  --->>> *** << ${this.jugadors[0].nomJugador} >> * << ${this.jugadors[1].nomJugador} >> * << ${this.jugadors[2].nomJugador} >> * << ${this.jugadors[3].nomJugador} >>`);
    // console.log("inicializando MARCADOR en JOC:", marcador)
  }

  // canviarPunts() {
  //     console.log("HHHOOLLAAAAAA")
  //     let i = 0;
  //     let puntsJugadorJoc;
  //     for (i = 0; i < 10; i++) {     // 10 rondes de jocs
  //         let ronda = i + 1;
  //         console.log(`\nRONDA ${ronda}: `);
  //         jocc.forEach(joc => {

  canviarPuntsJoc(indexJoc, posicioJugador) {
    let puntsAModificar = 0;
    // let quantitatJugadors = joc.jugadors.length;
    // let posicioJugador = parseInt(Math.random() * quantitatJugadors);

    let missatge;
    puntsAModificar = modificarPunts();
    if (puntsAModificar > 0) {
      missatge = `S'han sumat ${puntsAModificar} punts`;
    } else {
      missatge = `S'han restat ${-puntsAModificar} punts`;
    }

    //! ESTA PARTE ES LA QUE TIENE QUE IR EN JOC I GUARDATS AL MARCADOR
    // console.log('mmaarrccaaddoorr', marcador)
    // console.log("Holaaaaaaaaaaaaaa!!! JOC:", joc)
    // console.log("Holaaaaaaaaaaaaaa!!! MARCADOR:", marcador)
    console.log("A ver si consigo que me salga INDEX JOC", indexJoc)
    //! aquí es donde hay que modificar para que los puntos vayan al jugador que quiero
    this.jugadors[posicioJugador].punts += puntsAModificar;
    // console.log(" AQUI!!!  Marcador.punts", marcador.punts)
    // console.log("AQUI!!!   Marcador.punts", marcador.jugadors)
    
    // let puntsJugadorJoc = marcador.punts;
    let puntsJugadorJoc = this.jugadors[posicioJugador].punts;
    // console.log(puntsJugadorJoc)
    console.log(` JOC: ${this.nomJoc} ==>> ${missatge} al jugador ${this.jugadors[posicioJugador].nomJugador}`);
    console.log("marcador joc:", this.nomJoc, this.jugadors)           

    if (puntsJugadorJoc < 0) {
      // marcador.punts = 0;
      this.jugadors[posicioJugador].punts = 0;
    }
  }
}

// marcador.jugadors[1].punts = 0

//! ESTA PARTE ES LA QUE TIENE QUE ESTABA EN APP (TIENE IR EN JOC I GUARDATS AL MARCADOR)

module.exports = Joc;
