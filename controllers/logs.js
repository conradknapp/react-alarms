const mongoose = require("mongoose");
const AlarmLog = require("../models/AlarmLog");

exports.logs_get_all = async (req, res, next) => {
  const allLogs = await AlarmLog.find()
    .sort({ date: "desc" });
  res.json(allLogs);
}

exports.logs_create_log = async (req, res, next) => {
  // const newLog = await new AlarmLog({

  // });
}