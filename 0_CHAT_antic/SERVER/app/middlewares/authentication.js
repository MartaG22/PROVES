const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');

const Usuari = require('../models/dbUsuari.js');

const authentication = async(req, res, next) => {

    const user = await req.body;
    console.log('user en authentication:', user)
    // const userName = req.body.userName;
    // const password = req.body.password;
     
    // Valida si s'han introduit dades
    if (!user.userName) return res.status(400).json({ status: "fail", message: `username not provided`});
    if (!user.password) return res.status(400).json({ status: "fail", message: `password not provided`});

    // Valida si l'USUARI està enregistrat
    const userFind = await Usuari.find({nomUsuari: user.userName});
    console.log(userFind)
    if (userFind.length == 0) {
        return res.status(400).json({ status: "fail", message: `No existeix aquest Usuari!`});
    };
    
    const passwordUsuari = userFind[0].passwordUsuari
    console.log('userFind', userFind, 'passwordUsuari', passwordUsuari)
    
    // Valida si la CONTRASENYA és correcta!!!
    console.log('<<<< user.password >>>>', user.password, '<<<< userFind.passwordUsuari >>>>', userFind[0].passwordUsuari)
    const bcriptPassword = await bcrypt.compare(user.password, userFind[0].passwordUsuari);
    console.log('bcriptPassword', bcriptPassword)
    if (!bcriptPassword) {
        return res.status(400).send({
            status: 'fail',
            message: "Wrong password"
        })
    }
    next()
}
//authenticate web token
const authJWT = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] 
    if (token === null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403)
        req.userName = decoded.userName;
        req.userId = decoded.userId;
        next()
    })
}

module.exports = {authJWT, authentication};