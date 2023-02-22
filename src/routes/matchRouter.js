const express = require('express');

const router = express.Router();

const matchController = require('../controllers/matchController');

router.post('/', matchController.addMatch);
router.post('/bysport', matchController.showAll);
router.delete('/', matchController.deleteMatch);

module.exports = router;
