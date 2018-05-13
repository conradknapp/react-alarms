const mongoose = require("mongoose");
const AlertDevice = require("../models/AlertDevice");

exports.alerts_get_all = async (req, res, next) => {
  const allAlerts = await AlertDevice.find({});
  await res.status(200).json(allAlerts);
}