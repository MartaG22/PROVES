// El singleton está el patró, però estàs guardant els punts als jugadors.
// Els punts haurien d'estar guardats només al marcador.
// I al marcador no s'hauria d'accedir directament, sino que fos el joc qui l'instacii i hi accedeixi (per guardar punts i mostrar-los)


const Joc = require("./joc.js");
const Jugador = require("./jugador.js");
const marcador = require("./marcador.js");
// const Marcador = require("./marcador.js");


// // const joc1 = new Joc ({joc: {nomJoc: 'Set i Mig'}});
const joc1 = new Joc('Set i Mig');
const joc2 = new Joc('Remigio');
const joc3 = new Joc('Parxís');
const joc4 = new Joc('Dòmino');

const arrayJocs = [joc1, joc2, joc3, joc4];
        // this.joc.jugadors.push({jugadors: [jugador1, jugador2, jugador3, jugador4]})
// console.log( "ARRAYJOCS:", arrayJocs)


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
// console.log("arrayJocs 0", arrayJocs[0])


// function modificarPunts() {
//     let punts = 0;
//     let restarSumarPunts = parseInt(Math.random() * 2);

//     (restarSumarPunts == 0) ? punts = -2 : punts = 3;       // Si restarSumarPunts = 0 --> RESTEM 2 PUNTS // Si Si restarSumarPunts = 1 --> SUMEM 3 PUNTS
//     return punts;
// }

(function inciarJoc() {
    let i = 0;
    let puntsJugadorJoc;
    // let marcador = new Marcador;
    for (i = 0; i < 8; i++) {     // 10 rondes de jocs
        let ronda = i + 1;
        console.log(`\nRONDA ${ronda}: `);
        arrayJocs.forEach(joc => {
            // console.log("JOCC:", joc)
            let puntsAModificar = 0;
            let quantitatJugadors = joc.jugadors.length;
            let posicioJugador = parseInt(Math.random() * quantitatJugadors);
            // console.log("JUGADOR A MODIFICAR PUNTS:", joc.jugadors[posicioJugador])  //? DESCOMENTAR LUEGO
            let indexJoc = arrayJocs.indexOf(joc);
            // console.log('joc', joc, 'index', indexJoc)

            joc.canviarPuntsJoc(indexJoc, posicioJugador)

            //             let missatge;
            //             puntsAModificar = modificarPunts()
            //             if (puntsAModificar > 0) {
            //                 missatge = `S'han sumat ${puntsAModificar} punts`
            //             } else {
            //                 missatge = `S'han restat ${-puntsAModificar} punts`
            //             }

            //             //! ESTA PARTE ES LA QUE TIENE QUE IR EN JOC I GUARDATS AL MARCADOR
            //             joc.jugadors[posicioJugador].punts += puntsAModificar;
            //             puntsJugadorJoc = joc.jugadors[posicioJugador].punts;
            //             console.log(` JOC: ${joc.nomJoc} ==>> ${missatge} al jugador ${joc.jugadors[posicioJugador].nomJugador}`);

            //             if (puntsJugadorJoc < 0) {
            //                 joc.jugadors[posicioJugador].punts = 0;
            //             };

        });
    };
    // console.log("marcador en app",marcador)
})();


  //? COMENTADO DE MOMENTO
function mostrarResultats() {
    console.log("\nPUNTS TOTALS DE CADA JUGADOR:")
    arrayJugadors.forEach(jugador => {
        console.log(jugador)
        marcador.mostrarPunts(jugador);
    });
    marcador.mostrarGuanyador(arrayJugadors);
};


// Joc.canviarPunts;
mostrarResultats();   //? COMENTADO DE MOMENTO
