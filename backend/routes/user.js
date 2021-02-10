const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'ruta de usuarios'})
});

module.exports = router;