const express = require(`express`);
const app = express();
const port = process.env.PORT || 5000;

const homeRoute = require(`./route/homeRoute`);
const articleRoute = require(`./route/articleRoute`);


app.use(`/`, homeRoute);
app.use(`/home/`, homeRoute);
app.use(`/style.css`, homeRoute);
app.use(`/javascript.js`, homeRoute);
// app.use(`/biniProfile.jpg`, homeRoute);
app.use(`/biniBG.jpeg`, homeRoute);

app.use(`/`, articleRoute);
app.use(`/article/`, articleRoute);


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})
