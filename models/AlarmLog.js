const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlarmLogSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  alarmDeviceId: {
    type: Schema.Types.ObjectId,
    ref: 'alarmDevice'
  }
});

AlarmLogSchema.index({
  "$**": "text"
});

module.exports = mongoose.model('alarmLog', AlarmLogSchema);