const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/privacy/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `privacypage`, `privacy.html`));
})
router.get(`/privacy.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `privacypage`, `privacy.css`));
})
router.get(`/global.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.js`));
})
router.get(`/privacy.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `privacypage`, `privacy.js`));
})
router.get(`/popvlogo.png`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `homepage`, `popvlogo.png`));
})
router.get(`/global.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.css`));
});

module.exports = router;