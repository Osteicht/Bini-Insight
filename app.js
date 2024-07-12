const express = require(`express`);
const path = require('path');
const router = require('./routes/router');
  
const app = express();
const port = process.env.port || 5000;


// middlewares
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
})
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})