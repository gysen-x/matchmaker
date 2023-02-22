const express = require("express");

const router = express.Router();

const entryController = require("../controllers/entryController");

router.post("/profile", entryController.getEntry);
router.post("/", entryController.addEntry);
router.delete("/", entryController.removeEntry);

module.exports = router;
