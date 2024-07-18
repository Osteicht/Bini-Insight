const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/article/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `article.html`));
})
router.get(`/article.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `article.css`));
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
module.exports = router;