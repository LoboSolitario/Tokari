const mongoose = require('../db');
var uniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name."],
        match: [/^[a-zA-Z0-9 ]+$/, 'Name is invalid.'],
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "Please add an email."],
        match: [/\S+@\S+\.\S+/, 'Email is invalid'],
        index: true
    },
    password: {
        type: String,
        required: [true, "Please enter a password."]
    },
    role: {
        type: String,
        enum: { values: ['admin', 'investor', 'manager'], message: '{VALUE} is not supported' },
        required: true
    },
    createdBaskets: [{ basketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Basket' } }],
    subscribedBaskets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Basket' }]
}, { timestamps: true });


userSchema.plugin(uniqueValidator, { message: 'is already taken.' });

const User = mongoose.model('User', userSchema);

module.exports = User;