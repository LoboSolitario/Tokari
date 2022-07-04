const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routeUsers = require('./src/routes/user.js');
const routeBaskets = require('./src/routes/basket.js');
const {errorHandler} = require('./src/middleware/errorHandler')
 const routeWebhook = require('./src/routes/webhook')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/users', routeUsers, (req, res) => res.sendStatus(401));
app.use('/api/baskets', routeBaskets, (req, res) => res.sendStatus(401));
app.use('/webhook', routeWebhook,(req, res) => res.sendStatus(401))
app.get('/', (req, res) => {
  res.send('hello world');
});

app.use(errorHandler)

const port = process.env.PORT || 4600;
app.listen(port);

console.log(`listening on ${port}`);
