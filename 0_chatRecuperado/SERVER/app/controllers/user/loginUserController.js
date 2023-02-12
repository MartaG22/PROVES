const Usuari = require('../../models/dbUsuari.js');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



const userLogin = async (req, res) => {

    try {
        const user = await req.body;
        const userFind = await Usuari.findOne({ nomUsuari: user.userName});
        console.log('userFind', userFind);

        const currentUser = {
            idUsuari: userFind.idUsuari,
            nomUsuari: userFind.nomUsuari,
            passwordUsuari: userFind.passwordUsuari
        };
        
        console.log('currentUser is: ' + currentUser)
        const accessToken = jwt.sign(currentUser, process.env.ACCESS_TOKEN_KEY)
        console.log('accessToken', accessToken)

        res.status(201).json({
            status: "success", 
            currentUser,
            accessToken
        });

        
    } catch {
        res.status(500).json({error: message});

    }
}





module.exports = userLogin;






// const retisterUser = async (req, res) => {
//     // Crear jugadors

//     console.log("Introdueix el nom del nou Jugador:");
//     console.log("jugador", req.body.nomJugador);
//     const nom = req.body.nomJugador;
//     console.log(nom);
//     const quantitatJugadors = await Jugador.count({});
//     console.log('quantitatJugadors:', quantitatJugadors);

//     if (!nom || nom == 'ANÒNIM') {

//         try {
//             const jugadorAnonim = await Jugador.create(  { idJugador: quantitatJugadors +1, nomJugador: "ANÒNIM" });
//             jugadorAnonim.save();

//             console.log(`Jugador creat com a  "${jugadorAnonim.nomJugador}"`) ;
//             res.status(200).json(`Jugador creat com a '${jugadorAnonim.nomJugador}'!`);

//         } catch (error) {
//             res.status(400).json(error);
//         }
//     } else {
//         try {
//             const jugador = await Jugador.findOne({ nomJugador: nom });   // Validació per trobar si existeix un jugador amb el nom introduit

//             if (jugador) {
//                 console.log("Aquest jugador ja existeix");
//                 res.status(400).json({ "Error": "Aquest jugador ja existeix!" });

//             } else {
//                 const nouJugador = await Jugador.create({  idJugador: quantitatJugadors +1, nomJugador: nom });
//                 nouJugador.save();

//                 console.log("Jugador creat amb èxit");
//                 res.status(200).json(`S'ha creat el jugador: ${nouJugador.nomJugador}`);
//             };
//         } catch (error) {
//             res.status(400).send(error);
//         };
//     };
// };

// module.exports = retisterUser;



// // const Usuari = require('../../models/dbUsuari.js')
// // const jwt = require('jsonwebtoken');
// // console.log(Usuari);


// // const registerUser = async (req, res) => {
// //     try {
// //         const { nomUsuari, nickUsuari, passwordUsuari, emailUsuari} = req.body;
        
// //         // VALIDACIONS



// //     } catch (error) {
// //         res.status
// //     }
// // }