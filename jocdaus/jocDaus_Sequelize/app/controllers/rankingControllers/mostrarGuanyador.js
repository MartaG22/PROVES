const {dbJugadors, dbJugades} = require('../../models/dbJoc');

const mostrarGuanyador = async (req, res) => {
    // retorna el jugador/a amb millor percentatge d’èxit.

    let missatge = "";
    try {
        const maximaPuntuacio = await dbJugadors.max('percentatgeExit');
        const guanyador = await dbJugadors.findOne({ where: { percentatgeExit: maximaPuntuacio } });

        console.log("maxima puntuacio:", maximaPuntuacio);
        console.log("guanyador:", guanyador);

        missatge += `GUANYADOR:  \n ID Jugador: ${guanyador.idJugador} \n Nom Jugador: ${guanyador.nomJugador} \n Percentatge d'èxit: ${guanyador.percentatgeExit}% \n \n`
        console.log("guanyador:", missatge);

        res.status(200).send(missatge);
    } catch (error) {
        res.status(400).send(error);
    };

};

module.exports = mostrarGuanyador;