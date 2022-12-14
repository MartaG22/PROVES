const Jugador = require('../../models/dbJugador.js');

const llistarJugadors = async (req, res) => {
    // Retorna llitat dels jugadors

    let missatge = "";
    try {
        const llistatJugadors = await Jugador.find({})

        llistatJugadors.forEach(jugador => {
            missatge += `\nID Jugador:  ${jugador.idJugador}  \nNom Jugador: ${jugador.nomJugador} \nPercentatge d'èxit: ${jugador.percentatgeExit} % \n \n`
        }
        );
        console.log(missatge);
        res.status(200).send(missatge);
    } catch (error) {
        res.status(400).send(error);
    };

};

module.exports = llistarJugadors;
