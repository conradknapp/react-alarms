const express = require("express");
const router = express.Router();
const AlarmsController = require('../../controllers/alarms');

// @route GET api/alarms
// @desc Gets all alarm devices
// @access Public
router.get("/", AlarmsController.alarms_get_all);

// @route GET api/alarms
// @desc Creates an alarm device
// @access Public
router.post("/", AlarmsController.alarms_create_alarm);

module.exports = router;