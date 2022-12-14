const {dbJugadors, dbJugades} = require('../../models/dbJoc');

const mostrarPerdedor = async (req, res) => {
    // retorna el jugador/a amb pitjor percentatge d’èxit.

    let missatge = "";
    try {
        const maximaPuntuacio = await dbJugadors.min('percentatgeExit');
        const guanyador = await dbJugadors.findOne({ where: { percentatgeExit: maximaPuntuacio } });

        console.log("maxima puntuacio:", maximaPuntuacio);
        console.log("guanyador:", guanyador);

        missatge += `PERDEDOR:  \n ID Jugador: ${guanyador.idJugador} \n Nom Jugador: ${guanyador.nomJugador} \n Percentatge d'èxit: ${guanyador.percentatgeExit}% \n \n`
        console.log("guamyador:", missatge);

        res.status(200).send(missatge);
    } catch (error) {
        res.status(400).send(error);
    };

};

module.exports = mostrarPerdedor;