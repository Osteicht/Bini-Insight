const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/`, (req, res) => {
  res.redirect(`/home/`);
})

router.get(`/home/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `homepage`, `home.html`));
})

router.get(`/global.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.css`));
});

router.get(`/home.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `homepage`, `home.css`));
});

router.get(`/global.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.js`));
})

router.get(`/home.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `homepage`, `home.js`));
})

router.get(`/biniBG.jpeg`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `homepage`, `biniBG.jpeg`));
})

module.exports = router;