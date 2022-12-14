const Jugador = require('../../models/dbJugador.js');
const Jugada = require('../../models/dbjugada.js');

const mostrarGuanyador = async (req, res) => {
    // retorna el jugador/a amb millor percentatge d’èxit.

    let missatge = "";
    try {

        await Jugador.find().sort({
            percentatgeExit: -1
        }).then((llistatOrdenat) => {
            console.log("LLISTAT:", llistatOrdenat)
            const guanyador = llistatOrdenat[0];
            console.log("MAX:", llistatOrdenat[0])
            missatge += `GUANYADOR:  \n ID Jugador: ${guanyador.idJugador} \n Nom Jugador: ${guanyador.nomJugador} \n Percentatge d'èxit: ${guanyador.percentatgeExit}% \n \n`


            // BUSQUEM EMPATS:
            const quantitatJugadors = llistatOrdenat.length;  
            llistatOrdenat.forEach(jugador => {
                const idJugadorActual = jugador.idJugador;
                const percentatgeJugadorActual = jugador.percentatgeExit
                if (idJugadorActual != guanyador.idJugador && percentatgeJugadorActual === guanyador.percentatgeExit){
                    console.log(jugador.nomJugador);
                    missatge += `GUANYADOR:  \n ID Jugador: ${jugador.idJugador} \n Nom Jugador: ${jugador.nomJugador} \n Percentatge d'èxit: ${jugador.percentatgeExit}% \n \n`
                }
            })

        });

        console.log("guanyador:", missatge);
        res.status(200).send(missatge);
    } catch (error) {
        res.status(400).send(error);
    };
};

module.exports = mostrarGuanyador;