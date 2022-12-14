const Jugador = require('../../models/dbJugador.js');
const Jugada = require('../../models/dbjugada.js');

const mostrarPerdedor = async (req, res) => {
    // retorna el jugador/a amb pitjor percentatge d’èxit.

    let missatge = "";
    try {

        await Jugador.find().sort({
            percentatgeExit: 1
        }).then((llistatOrdenat) => {
            const perdedor = llistatOrdenat[0];
            console.log("MIN:", llistatOrdenat[0]);
            missatge += `PERDEDOR:  \n ID Jugador: ${perdedor.idJugador} \n Nom Jugador: ${perdedor.nomJugador} \n Percentatge d'èxit: ${perdedor.percentatgeExit}% \n \n`


            const quantitatJugadors = llistatOrdenat.length;  // BUSQUEM EMPATS:
            llistatOrdenat.forEach(jugador => {
                const idJugadorActual = jugador.idJugador;
                const percentatgeJugadorActual = jugador.percentatgeExit;
                if (idJugadorActual != perdedor.idJugador && percentatgeJugadorActual === perdedor.percentatgeExit) {
                    console.log(jugador.nomJugador);
                    missatge += `PERDEDOR:  \n ID Jugador: ${jugador.idJugador} \n Nom Jugador: ${jugador.nomJugador} \n Percentatge d'èxit: ${jugador.percentatgeExit}% \n \n`

                }
            });

        });

        res.status(200).send(missatge);
    } catch (error) {
        res.status(400).send(error);
    };

};

module.exports = mostrarPerdedor;



