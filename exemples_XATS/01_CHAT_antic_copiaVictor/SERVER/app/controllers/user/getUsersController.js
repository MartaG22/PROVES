const Usuari = require('../../models/dbUsuari.js');

const getUsers = async (room) => {
      console.log('rrrrroooooommmmm' , room);
      try {
            let users = await Usuari.find()
      } catch {

      }
}

module.exports = getUsers;