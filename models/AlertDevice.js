const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlertDeviceSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AlertDevice', AlertDeviceSchema);