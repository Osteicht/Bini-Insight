const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/terms-of-agreement/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `termspage`, `terms.html`));
})
router.get(`/terms.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `termspage`, `terms.css`));
})
router.get(`/global.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.js`));
})
router.get(`/global.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `termspage`, `terms.js`));
})
router.get(`/popvlogo.png`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `homepage`, `popvlogo.png`));
})
router.get(`/global.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.css`));
});

module.exports = router;