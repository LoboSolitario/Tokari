const mongoose = require('../db');
// const Basket = require('./basket');
// const {Basket, basketSchema} = require('./basket');
var uniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
    username: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9 ]+$/, 'is invalid'], index: true },
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    subscribedBaskets: [
        {
            basketID:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Basket',

            },
            subscriptionDuration: Number
        }
    ]
    // createdBaskets: [basketSchema]
}, { timestamps: true });


userSchema.plugin(uniqueValidator, { message: 'is already taken.' });

const User = mongoose.model('User', userSchema);

module.exports = User;