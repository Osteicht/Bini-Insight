const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/article/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `article.html`));
})

router.get(`/article.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `article.css`));
})

router.get(`/global.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.js`));
})

router.get(`/article.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `article.js`));
})

router.get(`/article/binibini.jpg`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `binibini.jpg`));
})

router.get(`/article/binibini.jpg`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `binibini.jpg`));
})
router.get(`/popvlogo.png`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `homepage`, `popvlogo.png`));
})
router.get(`/global.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `global.css`));
});
module.exports = router;