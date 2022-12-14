const Jugador = require('../../models/dbJugador.js');
const Jugada = require('../../models/dbjugada.js');

const llistarJugades =  async (req, res) => {
    // Retorna el llistat de jugades per un jugador/a.
    // Cada jugador/a pot veure un llistat de totes les tirades que ha fet amb el valor de cada dau i si s’ha guanyat o no la partida. 
    // A més, pot saber el percentatge d’èxit de les tirades que ha fet.

    const id = req.params.id;

    try {
        const dadesJugadorTrobat = await Jugador.findOne({ idJugador: id });   // Validació per trobar si existeix un jugador amb el nom introduit
        console.log('***dadesJugadorTrobat:***', dadesJugadorTrobat);

        if (dadesJugadorTrobat == null) {
            console.log("El valor de l'ID introduit no existeix!");
            res.status(400).json({ Error: "Aquest jugador no existeix!" });

        } else {
            const idJugadorTrobat = dadesJugadorTrobat.idJugador;
            console.log("jugador Trobat:", dadesJugadorTrobat.nomJugador);

            const jugades = await Jugada.find({ idJugador: idJugadorTrobat });
            const dadesJugador = `ID Jugador: ${idJugadorTrobat}  \nNom Jugador: ${dadesJugadorTrobat.nomJugador} \n`;

            let missatgePercentatge = `Percentatge d'èxit: ${dadesJugadorTrobat.percentatgeExit}% \n \n`
            let missatgeTirades = "";

            for (let i = 0; i < jugades.length; i++) {
                let jugadaActual = jugades[i];
                missatgeTirades += `TIRADA  ${i + 1}: \n Dau 1: ${jugadaActual.tiradaDau1} \n Dau 2: ${jugadaActual.tiradaDau2} \n Partida guanyada: ${jugadaActual.partidaGuanyada}  \n \n`;
            };

            res.status(200).send(dadesJugador + missatgePercentatge + missatgeTirades);
        };
    } catch (error) {
        res.status(400).send(error);
    };
};

module.exports = llistarJugades;
