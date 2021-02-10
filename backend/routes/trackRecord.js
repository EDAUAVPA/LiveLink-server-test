const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController.js');

router.get('/', trackController.getRecords);

module.exports = router;