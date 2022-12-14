const Jugador = require('../../models/dbJugador.js');


const modificarJugador = async (req, res) => {
    // Modifica el nom dels jugadors
    const id = req.params.id;

    console.log(id)
    console.log("HOLAAA/34535")
    try {  //TODO  FALTA buscar por ID y guardar por ID
        const jugadorAModificar = await Jugador.findOne({ idJugador: id });   // Validació per trobar si existeix un jugador amb el nom introduit
        console.log('jugadorAModificar', jugadorAModificar);
        const nouNomJugador = req.body.nomJugador;

        if (jugadorAModificar == null) {
            try {
                console.log("El valor de 'jugador a modificar' és " + jugadorAModificar); // NULL
                res.status(400).json({ Error: "Aquest jugador no existeix!" });

            } catch (error) {
                res.status(400).send(error);
            };

        } else {
            try {
                const nomJugadorTrobat = jugadorAModificar.nomJugador
                const nomJugadorRepetit = await Jugador.findOne({ nomJugador: nouNomJugador });   // Validació per trobar si existeix un jugador amb el nom introduit
                console.log('nomJugadorRepetit:', nomJugadorRepetit);

                if (nomJugadorRepetit && nouNomJugador != "") {
                    console.log("Aquest jugador ja existeix. Introdueix un altre nom");
                    res.status(400).json({ "Error": "Aquest jugador ja existeix!  Introdueix un altre nom!" });

                } else if (nouNomJugador === "") {
                    const jugadorAnonim = await jugadorAModificar.updateOne({ nomJugador: "ANÒNIM" });
                    jugadorAnonim.save();
                    console.log("Jugador creat com a 'ANÒNIM'!");
                    res.status(200).json(`Jugador creat com a '${jugadorAnonim.nomJugador}'!`);

                } else {   // TODO falta ensenyar el nom  del jugador modificat / NO L'ENSENYA BÉ, ENCARA QUE CANVIA EL NOM
                    await jugadorAModificar.updateOne({ nomJugador: nouNomJugador });

                    res.status(200).json(`Nom del jugador modificat amb èxit.  Nou nom:  ${jugadorAModificar.nomJugador}`);
                };

            } catch (error) {
                res.status(400).send(error);
            };
        };
    } catch (error) {
        res.status(400).send(error);
    };
};


module.exports = modificarJugador;
