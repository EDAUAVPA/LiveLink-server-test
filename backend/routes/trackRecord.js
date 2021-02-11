const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController.js');

router.get('/', trackController.getRecords);

router.post('/save/:user_id', trackController.saveRecord);

router.post('/search/:user_id', trackController.getUserRecord);

module.exports = router;