const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/terms-of-agreement/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `termspage`, `terms.html`));
})
router.get(`/terms.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `termspage`, `terms.css`));
})
router.get(`/terms.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `termspage`, `terms.js`));
})

module.exports = router;