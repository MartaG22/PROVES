const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/dbUsuaris')

const db = mongoose.connection;

db.on('error', function (err) {
    console.log('Connection error', err);
});

db.once('open', function () {
    console.log('Connection to dbUsuaris successful!')
})

const usuari = new Schema(
    {
        _$oid: {},
        idUsuari: {type: Number},
        nomUsuari: {type: String},
        nickUsuari: {type: String},
        passwordUsuari: {type: String},
        emailUsuari: {type: String}
    },
    
);

module.exports = mongoose.model('User', usuari);