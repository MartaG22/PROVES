const {dbJugadors, dbJugades} = require('../../models/dbJoc');

const esborrarJugades = async (req, res) => {
    // elimina les tirades d'un jugador/a.


    const missatge = {};
    const id = req.params.id;

    try {
        const dadesJugadorTrobat = await dbJugadors.findOne({ where: { idJugador: id } });   // Validació per trobar si existeix un jugador amb el nom introduit
        console.log('***dadesJugadorTrobat:***', dadesJugadorTrobat);

        if (dadesJugadorTrobat == null) {
            console.log("El valor de l'ID introduit no existeix!");
            res.status(400).json({ Error: "Aquest jugador no existeix!" });

        } else {

            const idJugadorTrobat = dadesJugadorTrobat.idJugador;
            console.log('***idJugadorTrobat:***', idJugadorTrobat);

            await dadesJugadorTrobat.update({ tiradesJugador: 0,  tiradesGuanyades: 0, percentatgeExit: 0 } );
            const jugades = await dbJugades.destroy({ where: { JugadorIdJugador: idJugadorTrobat } });

            // const dadesJugador = `ID Jugador: ${idJugadorTrobat}  \nNom Jugador: ${dadesJugadorTrobat.nomJugador} \n \n`;
            // const missatge = `S'han esborrat amb èxit ${jugades} jugades del jugador amb ID ${idJugadorTrobat}`;
            
            const dadesJugador = {
                'ID Jugador:': idJugadorTrobat,
                'Nom Jugador:': dadesJugadorTrobat.nomJugador,
                "S'han esborrat amb èxit:": `${jugades} jugades d'aquest jugador`
            }

            res.status(200).json({"Dades Jugador:": dadesJugador});

        }
    } catch (Error) {
        res.status(400).json({"Error:": Error});
    };
};

module.exports = esborrarJugades;