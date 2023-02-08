const { dbJugadors, dbJugades } = require('../../models/dbJoc.js');

const llistarJugador = async (req, res) => {
    // Retorna llitat dels jugadors

    let missatge = [];
    try {
        const llistatJugadors = await dbJugadors.findAll({})
        if (llistatJugadors.length == 0) {
            return res.status(400).json({"Error:": "Encara no hi ha jugadors enregistrats!"});
        }


        llistatJugadors.forEach(
            jugador => {
                jugador = {
                    'ID Jugador:': jugador.idJugador,
                    'Nom Jugador:': jugador.nomJugador,
                    "Quantitat de Tirades:": jugador.tiradesJugador,
                    "Percentatge d'èxit:": `${jugador.percentatgeExit} %`
                };
    
                missatge.push(jugador)
    
            }
        );

        console.log(missatge);
        res.status(200).json({"Jugadors:": missatge});
    } catch (Error) {
        res.status(400).json({"Error:": Error});
    };

};

module.exports = llistarJugador;
