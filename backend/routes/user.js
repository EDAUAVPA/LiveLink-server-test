const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const verifyToken = require('../middleware/verifyToken.js');

router.post('/login', userController.validateUser);

router.get('/', userController.getUsers);

router.get('/info', verifyToken, userController.getUserId);

router.post('/create', userController.saveUser);

module.exports = router;