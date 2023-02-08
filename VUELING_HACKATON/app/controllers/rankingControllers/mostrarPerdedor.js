const {dbJugadors, dbJugades} = require('../../models/dbJoc');

const mostrarPerdedor = async (req, res) => {
    // retorna el jugador/a amb pitjor percentatge d’èxit.

    let missatge = [];
    try {
        const minimaPuntuacio = await dbJugadors.min('percentatgeExit');
        const jugadorPerdedor = await dbJugadors.findAll({ where: { percentatgeExit: minimaPuntuacio } });

        console.log("minima puntuacio:", minimaPuntuacio);
        console.log("perdedor:", jugadorPerdedor);

        // missatge += `PERDEDOR:  \n ID Jugador: ${guanyador.idJugador} \n Nom Jugador: ${guanyador.nomJugador} \n Percentatge d'èxit: ${guanyador.percentatgeExit}% \n \n`
        // console.log("perdedor:", missatge);

        jugadorPerdedor.forEach(jugador =>{

            perdedor = {
                "ID Jugador:": jugador.idJugador,
                "Nom Jugador:": jugador.nomJugador,
                "Quantitat de Tirades:": jugador.tiradesJugador,
                "Percentatge d'èxit:": jugador.percentatgeExit,
            };

            missatge.push(perdedor);
        })

        res.status(200).json({"PERDEDOR:": missatge});
    } catch (error) {
        res.status(400).json({error});
    };

};

module.exports = mostrarPerdedor;