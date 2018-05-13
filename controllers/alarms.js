const mongoose = require("mongoose");
const AlarmDevice = require("../models/AlarmDevice");

exports.alarms_get_all = async (req, res, next) => {
  const allAlarms = await AlarmDevice.find({});
  await res.status(200).json(allAlarms);
}

exports.alarms_create_alarm = async (req, res, next) => {
  const alarmDevice = await new AlarmDevice({
    description: req.body.description,
    category: req.body.category
  });
  await alarmDevice.save();
  await res.status(201).json(alarmDevice);
}