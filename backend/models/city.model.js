const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  notes: {
    type: String,
    trim: true
  },
  periodFrom: {
    type: String,
    required: true,
    trim: true
  },
  dynasty: {
    type: Schema.Types.ObjectId,
    ref: 'Dynasty',
    required: true
  },
  presentLocation: {
    type: String,
    required: true,
    trim: true
  }
},
  {
    timestamps: false

  });

const city = mongoose.model("City", citySchema);

module.exports = city;