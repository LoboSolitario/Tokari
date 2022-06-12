// import mongoose from '../db.js';
const mongoose = require('../db');
// import User from "./user.js";
// const {User, userSchema} = require('./user');
var uniqueValidator = require('mongoose-unique-validator');


const basketSchema = new mongoose.Schema({
    basketName: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9 ]+$/, 'is invalid'], index: true }, // is it unique?
    overview: String,
    details: String,
    status: Boolean,
    volatility: String,
    risk: String,
    rebalanceFreq: Number,
    subscriptionFee: Number
    // owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, { timestamps: true });

basketSchema.plugin(uniqueValidator, { message: 'is already taken.' });

const Basket = mongoose.model('Basket', basketSchema);

// export default Basket;
// module.exports = {Basket: Basket, basketSchema: basketSchema};
module.exports = Basket;