// Carregar Singleton marcador
var marcador = require('./Marcador');

class Jocs {

    // construir un nou Joc. I afegir el nom del Joc a la Array de Jocs del Singleton Marcador
    constructor(name) {
        this.name = name;
        marcador.jocs[name] = [];
    }

    // Mostrar Puntuació d'aquest Joc des de la Array de Jocs del SingletonMarcador
    mostrarPuntuacio(){
        
        // find joc, and then Show Points for every player, and the winner
        console.log(`Marcador Final del joc de ${this.name}.`)
        const arrayJugadors = marcador.jocs[this.name];
        let maxPuntuacio = 0;
        let maxJugador = "";
        for (const jugador of arrayJugadors) {
            if (jugador.Punts > maxPuntuacio){
                maxPuntuacio = jugador.Punts; 
                maxJugador = jugador.nom;
            } 
            console.log(`  Jugador "${jugador.nom}", té ${jugador.Punts} punts.`);
        }
        console.log(`  Jugador "${maxJugador}" guanya, amb ${maxPuntuacio} punts.`);
    }
}

module.exports = Jocs;