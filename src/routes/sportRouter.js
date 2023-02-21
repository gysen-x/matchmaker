const express = require('express');

const router = express.Router();

const sportController = require('../controllers/sportController');

router.get('/', sportController.showSports);
router.post('/', sportController.createSport);

module.exports = router;
