const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contactController");

router.get("/", contactController.showContacts);
router.post("/", contactController.createSport);

module.exports = router;
