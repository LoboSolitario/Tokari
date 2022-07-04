const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const Basket = require('../models/basket');
const User = require('../models/user');

const stripeWebhook = asyncHandler(async (req, res) => {

    const payload = req.body;

    //if the checkout session is completed sucessfully
    if (payload.type === 'checkout.session.completed') {
        const session = payload.data.object;
        let userID = session.client_reference_id;
        let basketID = session.metadata.basket_id;

        const basket = await Basket.findById(basketID);
        if (!basket) {
            res.status(400);
            throw new Error("Basket not found");
        }
        const user = await User.findByIdAndUpdate(userID, { $push: { subscribedBaskets: basket } }, { new: true })
        .catch(err => {
            res.status(400);
            throw new Error(err);
        });
    }

    res.status(200)
})

router.post('/', stripeWebhook);

module.exports = router;