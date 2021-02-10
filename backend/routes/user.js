const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/login', userController.validateUser);

router.get('/', userController.getUsers);

router.post('/', userController.saveUser);

module.exports = router;