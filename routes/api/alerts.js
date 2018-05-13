const express = require("express");
const router = express.Router();
const AlertsController = require('../../controllers/alerts');

// @route GET api/alerts
// @desc Gets all alerts devices
// @access Public
router.get("/", AlertsController.alerts_get_all);

module.exports = router;