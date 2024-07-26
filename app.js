const express = require(`express`);
const app = express();
const port = process.env.PORT || 5000;

const homeRoute = require(`./route/home`);
const articleRoute = require(`./route/article`);
const termsRoute = require(`./route/terms`);
const privacyRoute = require(`./route/privacy`);

// async function checkUrl (req, res, next){
//     console.log(`Requested URL: ${req.url}, Method: ${req.method}`);
//     next(); 
// }

app.use(`/`, homeRoute);
app.use(`/home/`, homeRoute);
// app.use(`/home.css`, homeRoute);
// app.use(`/home.js`, homeRoute);
// app.use(`/biniProfile.jpg`, homeRoute);
// app.use(`/biniBG.jpeg`, homeRoute);

app.use(`/`, articleRoute);
app.use(`/article/`, articleRoute);

app.use(`/`, termsRoute);
app.use(`/terms-of-agreement/`, termsRoute);

app.use(`/`, privacyRoute);
app.use(`/privacy/`, privacyRoute);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})
