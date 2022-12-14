const tiroDaus = require('../../helpers/tiradaDaus');
const Jugador = require('../../models/dbJugador.js');
const Jugada = require('../../models/dbjugada.js');

const crearJugada = async (req, res) => {
    // Un jugador/a específic realitza una tirada.

    console.log("Introdueix el ID d'un Jugador:");
    console.log("jugador", req.params.id);
    const id = req.params.id;
    console.log(id);
    try {
        const jugadorTrobat = await Jugador.findOne({ idJugador: id });

        if (!jugadorTrobat) {
            res.status(400).json({ Error: "Aquest jugador no existeix!" });

        } else {
        
            const tiradaDaus = tiroDaus();
            console.log('tiradaDaus', tiradaDaus); // devuelve array del return
            console.log(tiradaDaus.resultatJugada); // devuelve array del return

            console.log("nomjugador", jugadorTrobat.nomJugador);
            console.log("tirades jugador:", jugadorTrobat.tiradesJugador);

            await Jugada.create(
                {
                        // idJugada: tiradesJugador +1,
                        tiradaDau1: tiradaDaus.tiradaDau1,
                        tiradaDau2: tiradaDaus.tiradaDau2,
                        partidaGuanyada: tiradaDaus.resultatJugada,
                        idJugador: jugadorTrobat.idJugador
                }
                );

            const tiradesPerJugador = ++jugadorTrobat.tiradesJugador;
            await jugadorTrobat.update({ tiradesJugador: tiradesPerJugador });

            if (tiradaDaus.resultatJugada === true) {
                console.log(`El jugador ${jugadorTrobat.nomJugador} ha guanyat la tirada!`)
                await jugadorTrobat.update(
                    {
                        tiradesGuanyades: ++jugadorTrobat.tiradesGuanyades
                    }
                );
                console.log("tirades guanyades", jugadorTrobat.tiradesGuanyades)
                console.log("tirades tiradesPerJugador", jugadorTrobat.tiradesJugador)
            };

            let percentatge = 0;
            percentatge = (jugadorTrobat.tiradesGuanyades * 100) / jugadorTrobat.tiradesJugador;
            console.log('percentatge', percentatge)
            await jugadorTrobat.update(
                {
                    percentatgeExit: percentatge
                }
            )

            const dadesJugador = `ID Jugador: ${jugadorTrobat.idJugador}  \nNom Jugador: ${jugadorTrobat.nomJugador} \n \n`;
            const missatge = ` DAU 1: ${tiradaDaus.tiradaDau1} \n DAU 2: ${tiradaDaus.tiradaDau2} \n Partida guanyada: ${tiradaDaus.resultatJugada}`;
            res.status(200).send(dadesJugador + missatge);
        };

    } catch (error) {
        res.status(400).send(error);
    };
};


module.exports = crearJugada;

