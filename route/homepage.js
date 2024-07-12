const express = require(`express`);
const router = express.Router();
const path = require(`path`);

router.get(`/`, (req,res) => {
    res.redirect(`/home/`);
})
router.get(`/home/`, (req, res) => {
    res.sendFile(path.join(__dirname, `public`, `homepage`, `index.html`));
})
router.get(`/style.css`, (req, res) => {
    res.sendFile(path.join(__dirname, `public`, `homepage`, `style.css`));
})
router.get(`/javascript.js`, (req, res) => {
    res.sendFile(path.join(__dirname, `public`, `homepage`, `javascript.js`));
})

module.exports = router;