const express = require('express');

const router = express.Router();

const entryController = require('../controllers/entryController');

router.post('/', entryController.addEntry);
router.delete('/', entryController.removeEntry)


module.exports = router;