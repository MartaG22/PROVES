// Carregar Singleton marcador
var marcador = require('./Marcador');

class Jugador  {

    // Crear Un Jugador nou. Enviar el nom del jugador a la Array de Jugadors del Marcador
    constructor(name) {
        this.name = name;
        marcador.jugadors.push(name);
    }

    // Afegir un Joc a un Jugador en la array de Jocs del Marcador
    afegirAlJoc(nomJoc){

        const jocExists = marcador.jocs.hasOwnProperty(nomJoc);
        if (jocExists){
            console.log(`Jugador ${this.name} afegit al joc ${nomJoc}`);
            marcador.jocs[nomJoc].push({"nom": this.name, Punts: 0 });
        }
        else {
            console.log(`Aquest Joc no Existeix.`)
        }

    }

    // afegir Punts d'un jugador a un joc de la array de Jocs del Marcador
    afegeixPunts(punts, nomJoc) {
        
        const arrayJoc = marcador.jocs[nomJoc];
        const index = arrayJoc.findIndex(jugador => jugador.nom === this.name);
        marcador.jocs[nomJoc][index].Punts += punts;
        console.log(`Afegits ${punts} punts al joc ${nomJoc} del jugador ${this.nam}`);
    
    }
}

module.exports = Jugador;