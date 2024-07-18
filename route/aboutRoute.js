const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/about/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `aboutpage`, `about.html`));
})
router.get(`/about.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `aboutpage`, `about.css`));
})
router.get(`/about.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `aboutpage`, `about.js`));
})

module.exports = router;