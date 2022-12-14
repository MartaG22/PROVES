//https://asfo.medium.com/autenticando-un-api-rest-con-nodejs-y-jwt-json-web-tokens-5f3674aba50e

// const express = require("express");
// const app = express();

//!  PARA CREAR EL JSON WEB TOKEN:
let jwt = require("jsonwebtoken");
// let bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ limit: "10mb" }));

const auth = async (req, res) => {
    try {
        // const { username, password } = req.body;
        let username = req.body.user;
        let password = req.body.password;
        console.log("username:", username,  "///   password:", password);

        const { ADMIN_NAME, ADMIN_PASSWORD, TOKEN_SECRET_KEY } = process.env;

        if (username !== ADMIN_NAME || password !== ADMIN_PASSWORD) {
            res.status(401).json({
                //status:'fail',
                message: "Authentication failed.Incorrect username or password",
            });
            return;
        }

        // generates token
        const payload = { username: ADMIN_NAME };

        const accessToken = jwt.sign(payload, TOKEN_SECRET_KEY, {expiresIn: 1440});

        //created accessToken
        res.json(accessToken);
    } catch (err) {
        res.status(500).send({
            //status: 'error',
            message: err.message,
        });
    }
};


module.exports = auth;

// const auth = async (req, res) => {
// // app.post("/login", (req, res) => {
//     let username = req.body.user;
//     let password = req.body.password;
//     console.log("username:", username, "///   password:", password);
//     if (username !== "Omar" || password !== "IT-Academy") {
//         // verificar si existe en nuestra base de datos de usuarios
//         res.status(401).send({
//             error: "usuario o contraseña inválidos",
//         });
//         return;
//     };

//     let tokenData = {
//         username: username,
//     };

//     let token = jwt.sign(tokenData, "Secret Password", {
//         expiresIn: 60 * 60 * 24, // Expira en 24 horas.
//     });

//     console.log(token); //!  CREO QUE LO TENEMOS QUE GUARDAR EN LA BASE DE DATOS
//     res.send({
//         token,
//     });
// };

// //!  PARA AUTENTICARNOS MEDIANTE TOKENS:
// app.get("/secure", (req, res) => {
//     let token = req.headers["authorization"];
//     if (!token) {
//         res.status(401).send({
//             error: "Es necesario el token de autenticación",
//         });
//         return;
//     };

//     token = token.replace("Bearer ", "");

//     jwt.verify(token, "Secret Password", function (err, user) {
//         if (err) {
//             res.status(401).send({
//                 error: "Token inválido",
//             });
//         } else {
//             console.log(" TE HAS AUTENTICADO!!! \n TOMA YAAA!!!!");
//             res.send({ message: "TE HAS AUTENTICADO!!!    TOMA YAAA!!!!" });
//         };
//     });
// });
