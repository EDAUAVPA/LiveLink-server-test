const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackController.js');

router.get('/', trackController.getRecords);

router.post('/:user_id', trackController.saveRecord);

router.get('/:user_id', trackController.getUserRecord);

module.exports = router;