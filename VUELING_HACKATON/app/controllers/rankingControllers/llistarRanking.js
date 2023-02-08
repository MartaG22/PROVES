const sequelize = require('sequelize');
const { dbJugadors, dbJugades } = require('../../models/dbJoc');

const llistarRanking = async (req, res) => {
    // Retorna un ranking de jugadors/es ordenat per percentatge d'èxits i el percentatge d’èxits mig del conjunt de tots els jugadors/es.

    let missatge = [];
    let sumaPercentatges = 0;
    try {
        
        const llistatOrdenat = await dbJugadors.findAll({order: [['percentatgeExit', 'DESC']]});
        llistatOrdenat.forEach(jugador => {
            sumaPercentatges += jugador.percentatgeExit;

            const dadesJugador = {
                "ID Jugador:": jugador.idJugador,
                "Nom Jugador:": jugador.nomJugador,
                "Percentatge d'èxit:": `${jugador.percentatgeExit} %`,

            };

            missatge.push(dadesJugador);
        })


        const quantitatJugadors = await dbJugadors.count({})
        const totalRanking = await dbJugadors.sum('percentatgeExit');
        const percentatgeMig = totalRanking / quantitatJugadors;

        missatge.push( `PERCENTATGE D'ÈXIT MIG DE TOTS ELS JUGADORS: ${percentatgeMig} %` );
        console.log(missatge);
        res.status(200).json({"RANKING:": missatge});
        
    } catch (error) {
        res.status(400).send({error});
    };

};

module.exports = llistarRanking;
