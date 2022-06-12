const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// import routeUsers from "./src/routes/users.js";
// import routeBaskets from "./src/routes/baskets.js";
const routeUsers = require('./src/routes/user.js');
const routeBaskets = require('./src/routes/basket.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())


app.use('/api/users', routeUsers, (req, res) => res.sendStatus(401));
app.use('/api/baskets', routeBaskets, (req, res) => res.sendStatus(401));

// app.get('*', (req, res) => {
//   res.send('hello world');
// });

const port = process.env.PORT || 4600;
app.listen(port);

console.log(`listening on ${port}`);
