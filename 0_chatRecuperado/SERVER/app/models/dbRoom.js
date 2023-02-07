const mongoose = require('mongoose');

// const roomsSchema = new mongoose.Schema(
const roomsSchema = new mongoose.Schema(
      {
            _$oid: {},
            roomName:  {type: String, unique: true},
            usersInThisRoom: [
                  { 
                        idUsuari: {type: Number},
                        nomUsuari: {type: String},
                  }
            ],
            message: [
                  {
                        idUsuari: {type: Number},
                        nomUsuari: {type: String},
                        missatge: {type: String},
                        time: { type: Date, default: Date.now },
                  },
            ],
      },
      { timestamps: true }
);

const Room = mongoose.model('Room', roomsSchema);

module.exports = Room;