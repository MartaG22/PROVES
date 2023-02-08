const {dbJugadors, dbJugades} = require('../../models/dbJoc');

const modificarJugador = async (req, res) => {
    // Modifica el nom dels jugadors

    const id = req.params.id;

    try {
        const jugadorAModificar = await dbJugadors.findOne({ where: { idJugador: id } });   // Validació per trobar si existeix un jugador amb el nom introduit
        const nouNomJugador = req.body.nomJugador;

        if (jugadorAModificar == null) {
            try {
                console.log("El valor de 'jugador a modificar' és " + jugadorAModificar); // NULL
                res.status(400).json({ Error: "Aquest jugador no existeix!" });

            } catch (Error) {
                res.status(400).json({"Error:": Error});
            };

        } else {
            try {
                const nomJugadorTrobat = jugadorAModificar.nomJugador
                const nomJugadorRepetit = await dbJugadors.findOne({ where: { nomJugador: nouNomJugador } });   // Validació per trobar si existeix un jugador amb el nom introduit

                if (nomJugadorRepetit && nouNomJugador != "") {
                    console.log("Aquest jugador ja existeix. Introdueix un altre nom");
                    res.status(400).json({ "Error": "Aquest jugador ja existeix!  Introdueix un altre nom!" });

                } else if (nouNomJugador === "") {
                    const jugadorAnonim = await jugadorAModificar.update({ nomJugador: "ANÒNIM" });
                    console.log("Jugador creat com a 'ANÒNIM'!");
                    res.status(200).json({"Jugador:": `Jugador creat com a '${jugadorAnonim.nomJugador}'!`});

                } else {
                    await jugadorAModificar.update({ nomJugador: nouNomJugador });
                    res.status(200).json({"Jugador:": `Nom del jugador modificat amb èxit.  Nou nom:  ${jugadorAModificar.nomJugador}`});

                };

            } catch (Error) {
                res.status(400).json({"Error:": Error});
            };
        };
    } catch (Error) {
        res.status(400).json({"Error:": Error});
    };
};


module.exports =  modificarJugador;
