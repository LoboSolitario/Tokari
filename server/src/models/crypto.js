const mongoose = require('../db');

const cryptoSchema = new mongoose.Schema({
    cryptoName: String,
    cryptoSymbol: String,
    cryptoPrice: Number,
});


const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports =  Crypto;