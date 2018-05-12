const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlarmDeviceSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AlarmDevice', AlarmDeviceSchema);