const express = require(`express`);
const app = express();
const port = process.env.PORT || 5000;

const homeRoute = require(`./route/homeRoute`);
const articleRoute = require(`./route/articleRoute`);
const aboutRoute = require (`./route/aboutRoute`);
const termsRoute = require(`./route/termsRoute`);
const privacyRoute = require(`./route/privacyRoute`);


app.use(`/`, homeRoute);
app.use(`/home/`, homeRoute);
app.use(`/home.css`, homeRoute);
app.use(`/home.js`, homeRoute);
// app.use(`/biniProfile.jpg`, homeRoute);
app.use(`/biniBG.jpeg`, homeRoute);

app.use(`/`, articleRoute);
app.use(`/article/`, articleRoute);

app.use(`/`, aboutRoute);
app.use(`/about/`, aboutRoute);

app.use(`/`, termsRoute);
app.use(`/terms-of-agreement/`, termsRoute);

app.use(`/`, privacyRoute);
app.use(`/privacy/`, privacyRoute);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})
