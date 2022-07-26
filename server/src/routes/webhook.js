const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')
const Basket = require('../models/basket');
const User = require('../models/user');
const fs = require('fs');
const path = require('path');
const sendEmail = require('../controllers/emailController/email');
const Handlebars = require('handlebars');

const stripeWebhook = asyncHandler(async (req, res) => {

    const payload = req.body;

    //if the checkout session is completed sucessfully
    if (payload.type === 'checkout.session.completed') {
        const session = payload.data.object;
        let userID = session.client_reference_id;
        let basketID = session.metadata.basket_id;

        await Basket.findByIdAndUpdate(basketID, { 
            $push: {
                subscribers: userID
            }
        }, { new: true })
        const basket = await Basket.findById(basketID);
        if (!basket) {
            res.status(400);
            throw new Error("Basket not found");
        }

        // Update total revenue of the manager
        await User.findByIdAndUpdate(basket.owner, { $inc: { totalRevenue: basket.subscriptionFee } }, { new: true });

        await User.findByIdAndUpdate(userID, { $push: { subscribedBaskets: basket } }, { new: true })
            .then((userUpdated) => {
                try {
                    var source = fs.readFileSync(path.join(__dirname, '../emailTemplate/subscribe.hbs'), 'utf8');
                    var template = Handlebars.compile(source);
                    const replacements = {
                        basketName: basket.basketName
                    };
                    sendEmail(userUpdated.email, 'Subscribed to ' + basket.basketName + " successfully", template(replacements));

                } catch (err) {
                    console.log(err)
                }

            })
            .catch(err => {
                res.status(400);
                throw new Error(err);
            });

    }

    res.status(200)
})

router.post('/', stripeWebhook);

module.exports = router;