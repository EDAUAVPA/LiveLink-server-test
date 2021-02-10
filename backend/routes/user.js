const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/', userController.getUsers);

router.post('/', userController.saveUser);

module.exports = router;