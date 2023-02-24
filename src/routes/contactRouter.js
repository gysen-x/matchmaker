const express = require('express');

const router = express.Router();

const nodemailer = require('nodemailer');
require('dotenv').config();

const { SECURE_EMAIL, SECURE_PASSWORD, SUPPORT_EMAIL } = process.env;

const contactController = require('../controllers/contactController');

router.get('/', contactController.showContacts);
router.post('/', contactController.createSport);
router.post('/feedback', async (req, res) => {
  try {
    const { email, title, text } = req.body;
    const htmlForMessage = `<b>${title}</b><br /><b>${text}</b>`;

    const transporter = nodemailer.createTransport({
      host: 'smtp.rambler.ru',
      port: 465,
      secure: true,
      auth: {
        user: SECURE_EMAIL,
        pass: SECURE_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: SECURE_EMAIL,
      to: SUPPORT_EMAIL,
      subject: `FEED BACK FROM ${email}`,
      html: `${htmlForMessage}`,
    });
    res.json({ message: 'Thank you for feedback' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
