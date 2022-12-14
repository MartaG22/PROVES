const sequelize = require('sequelize');
const { dbJugadors, dbJugades } = require('../../models/dbJoc');

const llistarRanking = async (req, res) => {
    // Retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.

    let missatge = "";
    try {

        await dbJugadors.findAll({
            order: [
                ['percentatgeExit', 'DESC']
            ],
        }).then((llistatOrdenat) => {

            llistatOrdenat.forEach(jugador => {
                missatge += `ID Jugador: ${jugador.idJugador} \nNom Jugador: ${jugador.nomJugador} \nPercentatge d'èxit: ${jugador.percentatgeExit}% \n \n`

            });
        });

        const quantitatJugadors = await dbJugadors.count({})
        const totalRanking = await dbJugadors.sum('percentatgeExit');
        const percentatgeMig = totalRanking / quantitatJugadors;

        missatge += `PERCENTATGE D'ÈXIT MIG DE TOTS ELS JUGADORS: ${percentatgeMig}%`
        console.log(missatge);
        res.status(200).send(missatge);
        
    } catch (error) {
        res.status(400).send(error);
    };

};

module.exports = llistarRanking;
