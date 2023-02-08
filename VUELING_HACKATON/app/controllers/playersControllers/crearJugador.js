const {dbJugadors, dbJugades} = require('../../models/dbJoc');

const crearJugador = async (req, res) => {
    // Crear jugadors

    console.log("Introdueix el nom del nou Jugador:");
    console.log("jugador", req.body.nomJugador);
    const nom = req.body.nomJugador;
    console.log(nom)

    if (!nom || nom == 'ANÒNIM') {
        try {
            const jugadorAnonim = await dbJugadors.create({
                nomJugador: "ANÒNIM"
            });
            console.log("Jugador creat com a 'ANÒNIM'!");
            res.status(200).json({"Jugador:": `Jugador creat com a '${jugadorAnonim.nomJugador}'!`});

        } catch (error) {
            res.status(400).json(error);
        }
    } else {
        try {
            const jugador = await dbJugadors.findOne({ where: { nomJugador: nom } });   // Validació per trobar si existeix un jugador amb el nom introduit
            if (jugador) {
                console.log("Aquest jugador ja existeix");
                res.status(400).json({ "Error": "Aquest jugador ja existeix!" });
            } else {
                const jugador = await dbJugadors.create({
                    nomJugador: nom,
                });

                console.log("Jugador creat amb èxit");
                res.status(200).json({"Jugador:": `S'ha creat el jugador: ${jugador.nomJugador}`});
            };

        } catch (error) {
            res.status(400).json(error);
        }
    }
};

module.exports = crearJugador;
