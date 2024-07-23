const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/about/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `aboutpage`, `about.html`));
})

router.get(`/global.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.css`));
})

router.get(`/about.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `aboutpage`, `about.css`));
})

router.get(`/global.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.js`));
})

router.get(`/about.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `aboutpage`, `about.js`));
})

module.exports = router;