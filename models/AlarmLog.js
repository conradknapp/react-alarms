const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlarmLogSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  alarmDeviceId: {
    type: Schema.Types.ObjectId,
    ref: 'AlarmDevice',
    required: true
  }
});

AlarmLogSchema.index({
  "$**": "text"
});

module.exports = mongoose.model('AlarmLog', AlarmLogSchema);