const mongoose = require('mongoose');

const sala = new mongoose.Schema(
      {
            _$oid: {},
            roomName: {type: String},
            message: [
                  {
                        sala: { type: String},
                        idUsuari: {type: Number},
                        missatge: {type: String},
                        time: { type: Date, default: Date.now },
                  },
            ],
      },
      { timestamps: true }
);

const Room = mongoose.model('Room', sala);

module.exports = Room;