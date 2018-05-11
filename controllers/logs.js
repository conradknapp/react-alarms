const mongoose = require("mongoose");
const AlarmLog = require("../models/AlarmLog");

exports.logs_get_all = (req, res, next) => {
  // AlarmLog.find()
  //   .sort({ date: "desc" })
  //   .exec()
  //   .then(docs => {
  //     const response = {
  //       posts: docs.map(doc => {
  //         return {

  //         };
  //       })
  //     };
  //     res.status(200).json(response);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     res.status(500).json({ error: err });
  //   });
}

exports.logs_create_log = (req, res, next) => {
  // AlarmLog.save();
}