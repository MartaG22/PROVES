const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usuari = new Schema(
    {
        _$oid: {},
        idUsuari: {type: Number},
        nomUsuari: {type: String, required: true, unique: true},
        passwordUsuari: {type: String, required: true},
        room: {type: String},
        // nickUsuari: {type: String},
        // emailUsuari: {type: String}
    },
    { timestamps: true }
);

const Usuari = mongoose.model('User', usuari);

module.exports = Usuari;