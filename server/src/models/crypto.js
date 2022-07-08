
//this is needed when we want to limit the number of cryptos that are available on our platform.
//Hence if we have a crypto schema, we can add the specific cryptos that we support and the 
//portfolio manager can only add cryptos that are in our db to create the baskets (i.e in the 
//dropdown menu, we will populate the list of the cryptos from out crypto db)
const mongoose = require('../db');

const cryptoSchema = new mongoose.Schema({
    cryptoName: String,
    cryptoSymbol: String,
    cryptoPrice: Number,
});


const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports =  Crypto;