const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuari = new Schema(
    {
        _$oid: {},
        idUsuari: {type: Number},
        nomUsuari: {type: String},
        nickUsuari: {type: String},
        passwordUsuari: {type: String},
        emailUsuari: {type: String}
    }
);

module.exports = mongoose.model('User', usuari);