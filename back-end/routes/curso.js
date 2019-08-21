const express = require('express');
const router = express.Router();
const controller = require('../controllers/cursoController');

router.post('/', controller.novo);

module.exports = router;
