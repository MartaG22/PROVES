const mongoose = require('mongoose');

// const roomsSchema = new mongoose.Schema(
const roomsSchema = new mongoose.Schema(
      {
            _$oid: {},
            roomName:  {type: String},
            idUsuarisInThisRoom: [
                  { 
                        idUsuari: {type: Number}
                  }
            ],
            message: [
                  {
                        // sala: {type: String},
                        idUsuari: {type: Number},
                        missatge: {type: String},
                        time: { type: Date, default: Date.now },
                  },
            ],
      },
      { timestamps: true }
);

const Room = mongoose.model('Room', roomsSchema);

module.exports = Room;