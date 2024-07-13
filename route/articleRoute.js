const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/article/`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `index2.html`));
})
router.get(`/style2.css`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `style2.css`));
})
router.get(`/javascript2.js`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `javascript2.js`));
})
router.get(`/article/binibini.jpg`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `binibini.jpg`));
})
router.get(`/article/binibini.jpg`, (req, res) => {
  res.sendFile(path.join(__dirname, `public`, `articlepage`, `binibini.jpg`));
})
module.exports = router;