require('dotenv').config({ path: __dirname + '/../../.env' });
const mongoose = require('mongoose');
const dbName = "tokariDB";
const url = `mongodb+srv://team26:${process.env.DB_PASSWORD}@cluster0.rpoa9.mongodb.net/${dbName}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log('error connecting to the database', err);
    process.exit();
});

module.exports = mongoose;