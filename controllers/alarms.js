const mongoose = require("mongoose");
const AlarmDevice = require("../models/AlarmDevice");

exports.alarms_get_all = (req, res, next) => {
  // AlarmDevice.find();
  res.json({ auth: true });
}

exports.alarms_create_alarm = (req, res, next) => {
  AlarmDevice.save();
}