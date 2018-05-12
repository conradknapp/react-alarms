const mongoose = require("mongoose");
const AlarmLog = require("../models/AlarmLog");

exports.logs_get_all = async (req, res, next) => {
  const allLogs = await AlarmLog.find()
    .sort({ createdDate: "desc" })
    .populate('alarmDeviceId');
  await res.json(allLogs);
}

exports.logs_create_log = async (req, res, next) => {
  const newLog = await new AlarmLog({
     alarmDeviceId: req.body.alarmDeviceId
  });
  await newLog.save();
  await res.json(newLog);
}