const express = require(`express`);
const port = process.env.port || 5000;
const app = express();

const homeRoute = require(`./route/homepage`);

app.use(`/`, homeRoute);
app.use(`/style.css`, homeRoute);
app.use(`/javascript.js`, homeRoute);
app.use(`/home/`, homeRoute);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})