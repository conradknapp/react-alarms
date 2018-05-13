const express = require("express");
const router = express.Router();
const LogsController = require('../../controllers/logs');

// @route GET api/logs
// @desc Gets all logs from alarm devices
// @access Public
router.get("/", LogsController.logs_get_all);

// @route POST api/logs
// @desc Creates new log from activated alarm device
// @access Public
router.post("/", LogsController.logs_create_log);

module.exports = router;