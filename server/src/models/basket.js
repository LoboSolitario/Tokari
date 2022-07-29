const mongoose = require('../db');
var uniqueValidator = require('mongoose-unique-validator');

const basketSchema = new mongoose.Schema({
    basketName: { 
        type: String, 
        unique: true,
        required: [true, "Enter a basket Name."],
        match: [/^[a-zA-Z0-9./\- ]+$/, 'is invalid'],
        index: true 
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    overview: String,
    details: String,
    homepage: Boolean,
    volatility: String,
    risk: String,
    isFreeBasket: Boolean,
    rebalanceFreq: Number,
    subscriptionFee: Number,
    cryptoNumber: Number,
    subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    investors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    cryptoAlloc: [{
        cryptoSymbol: String,
        weight: Number
    }]
    
}, { timestamps: true });

basketSchema.plugin(uniqueValidator, { message: 'is already taken.' });

const Basket = mongoose.model('Basket', basketSchema);

module.exports = Basket;