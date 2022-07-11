const Basket = require('../models/basket');
const User = require('../models/user');
const Crypto = require('../models/crypto')
const asyncHandler = require('express-async-handler')
var ObjectId = require('mongoose').Types.ObjectId;
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const axios = require('axios');
var hmacSHA256 = require("crypto-js/hmac-sha256");
const { response } = require('express');
const binance_api_key = process.env.BINANCE_API_KEY;
const binance_api_secret = process.env.BINANCE_API_SECRET;

const cryptoMap = new Map();
cryptoMap.set('bitcoin', ['BTCUSDT', 21638])
cryptoMap.set('ethereum', ['ETHUSDT', 1218.76])
cryptoMap.set('litecoin', ['LTCUSDT', 52.26])
cryptoMap.set('tron', ['TRXUSDT', 0.0706])
cryptoMap.set('xrp', ['XRPUSDT', 0.344])
cryptoMap.set('binancecoin', ['BNBUSDT', 243])

// @desc seed for crypto data
// @route GET /api/baskets/cryptoseed
// @access public
const seedCrypto = asyncHandler(async (req, res) => {
    const cryptoList = [
        {
            "cryptoName": "Bitcoin",
            "cryptoSymbol": "BTC",
            "cryptoPrice": "20900.21312"
        },
        {
            "cryptoName": "Ethereum",
            "cryptoSymbol": "ETH",
            "cryptoPrice": "3214"
        },
        {
            "cryptoName": "Litecoin",
            "cryptoSymbol": "LTC",
            "cryptoPrice": "123.21312"
        },
        {
            "cryptoName": "Tron",
            "cryptoSymbol": "TRX",
            "cryptoPrice": "29500.21312"
        },
        {
            "cryptoName": "XRP",
            "cryptoSymbol": "XRP",
            "cryptoPrice": "30.21312"
        },
        {
            "cryptoName": "Binancecoin",
            "cryptoSymbol": "BNB",
            "cryptoPrice": "20320.21312"
        }
    ]

    const newCrypto = await Crypto.create(cryptoList).catch(err => res.status(400, err));
    res.status(200).json(newCrypto)
})

// @desc get the details of a specific basket 
// @route GET /api/baskets/basket/:id
// @access public
const getSpecificBasket = asyncHandler(async (req, res) => {
    const basketId = req.params.id;

    //Check if the passed :id is a valid mongodb _id
    if (!ObjectId.isValid(basketId)) {
        res.status(401);
        throw new Error("Incorrect basket id")
    }

    //find the basket to be viewed
    const basket = await Basket.findById(basketId).populate({
        path: 'owner',
        select: { 'name': 1 },
    });
    if (!basket) {
        res.status(400);
        throw new Error("Basket not found");
    }

    // If the basket is free, send the basket with cryptoAlloc data
    if (basket.subscriptionFee == 0) {
        res.status(200).json(basket);
    } else {        // If the basket is not free, check whether the user have access to the cryptoAlloc Data
        // Check if the user is authenticated
        if (res.locals.authenticated) {
            //find the user who is trying to view the basket
            const user = await User.findById(req.user.id);

            // Check if there is a user and they have access to the basket
            if (user && ((user.subscribedBaskets.some(el => el._id.toString() === basketId)) || (basket.owner._id.toString() === user.id))) {
                res.status(200).json(basket)
            } else {
                basket.cryptoAlloc = null;
                res.status(200).json(basket)
            }
        } else {        // When the user is not authenticated, send the data without cryptoAlloc data
            basket.cryptoAlloc = null;
            res.status(200).json(basket)
        }
    }
})

// @desc get list of all the baskets 
// @route GET /api/baskets/
// @access public
const getBaskets = asyncHandler(async (req, res) => {
    const baskets = await Basket.find({}).populate('owner')
    res.status(200).json(baskets)
})


// @desc get list of all the created baskets of a user
// @route GET /api/baskets/userBaskets
// @access private
const getUserBaskets = asyncHandler(async (req, res) => {
    const baskets = await Basket.find({ owner: req.user.id })
    res.status(200).json(baskets)
})

// @desc get list of all the subscribed baskets of a user
// @route GET /api/baskets/userSubscribedBaskets
// @access private
const getUserSubscribedBaskets = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select('-password').populate('subscribedBaskets')
    res.status(200).json(user.subscribedBaskets)
})

// @desc get list of all the invested baskets of a user
// @route GET /api/baskets/userInvestedBaskets
// @access private
const getUserInvestedBaskets = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id).select('-password').populate('investedBaskets')
    res.status(200).json(user.investedBaskets)
})


// @desc get list of all the transactions of a user
// @route GET /api/baskets/userTransactions
// @access private
const getUserTransactions = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select('-password')
    res.status(200).json(user.transactionLists)
})

// @desc Create a new basket
// @route POST /api/baskets/createBasket
// @access public
const createBasket = asyncHandler(async (req, res) => {
    // if basketName and cryptoAlloc is not sent
    if (!req.body.basketName && !req.body.cryptoAlloc) {
        res.status(400);
        throw new Error('Please add required fields.')
    }
    //find the user who is creating the basket
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found who is creating the basket");
    }



    //create the new basket
    const newBasket = await new Basket({
        basketName: req.body.basketName,
        owner: req.user.id,
        overview: req.body.overview,
        details: req.body.details,
        status: req.body.status,
        volatility: req.body.volatility,
        risk: req.body.risk,
        rebalanceFreq: req.body.rebalanceFreq,
        subscriptionFee: req.body.subscriptionFee,
        cryptoNumber: req.body.cryptoNumber,
        cryptoAlloc: req.body.cryptoAlloc
    });
    //save the new basket
    newBasket.save()
        .then(async (basket) => {
            //after creating the basket, append the basket id to the user schema for createdBaskets.
            const newBasket = { basketId: basket._id }
            const updatedUser = await User.findByIdAndUpdate(req.user.id, { $push: { createdBaskets: newBasket } }, { new: true });
            let product, price;
            //create a product in stripe
            try {
                product = await stripe.products.create({
                    name: req.body.basketName
                });

            } catch (err) {
                res.status(400).json(err)
            }
            //add a price to that product
            try {
                price = await stripe.prices.create({
                    unit_amount: req.body.subscriptionFee * 100,
                    currency: 'usd',
                    recurring: { interval: 'month' },
                    product: product.id,
                    //we use lookup key to place orders
                    lookup_key: String(basket._id)
                });

            } catch (err) {
                res.status(400).json(err)
            }
            res.status(200).json(basket)
        })
        .catch(err => res.status(400).json(err));
})


// @desc Edit basket Details
// @route GET /api/baskets/editBasket/:id
// @access Private
const editBasket = asyncHandler(async (req, res) => {
    //Check if the passed :id is a valid mongodb _id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(401);
        throw new Error("Incorrect basket id")
    }
    //find the basket to be rebalanced
    const basket = await Basket.findById(req.params.id);
    if (!basket) {
        res.status(400);
        throw new Error("Basket not found");
    }
    //find the user who is trying to rebalance the basket
    const user = await User.findById(req.user.id);
    //check if there is a user 
    if (!user) {
        res.status(401)
        throw new Error('User not found.');
    }
    //check if the user created the basket
    if (basket.owner.toString() !== user.id) {
        res.status(401);
        throw new Error("Unauthorised rebalance.")
    }
    const updatedBasket = await Basket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedBasket);
})


// @desc Rebalance Basket
// @route GET /api/baskets/rebalanceBasket/:id
// @access Private
const rebalanceBasket = asyncHandler(async (req, res) => {
    //Check if the passed :id is a valid mongodb _id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Incorrect basket id")
    }
    //find the basket to be rebalanced
    const basket = await Basket.findById(req.params.id);
    if (!basket) {
        res.status(400);
        throw new Error("Basket not found");
    }
    //find the user who is trying to rebalance the basket
    const user = await User.findById(req.user.id);
    //check if there is a user 
    if (!user) {
        res.status(401)
        throw new Error('User not found.');
    }
    //check if the user created the basket
    if (basket.owner.toString() !== user.id) {
        res.status(401);
        throw new Error("Unauthorised rebalance.")
    }

    const cryptoAlloc = JSON.parse(req.body.cryptoAlloc)
    const updatedBasket = await Basket.findByIdAndUpdate(req.params.id, { cryptoAlloc: cryptoAlloc, cryptoNumber: req.body.cryptoNumber }, { new: true });
    res.status(200).json(updatedBasket);
})


// @desc delete a specific basket
// @route GET /api/baskets/deleteBasket/:id
// @access Private
const deleteBasket = asyncHandler(async (req, res) => {
    //Check if the passed :id is a valid mongodb _id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Incorrect basket id")
    }
    //find the basket to be deleted using the basket id
    const basket = await Basket.findById(req.params.id);
    if (!basket) {
        res.status(400);
        throw new Error("Basket not found");
    }
    //find the user who is trying to delete the basket.
    const user = await User.findById(req.user.id);
    //check if there is a user 
    if (!user) {
        res.status(401)
        throw new Error('User not found.');
    }
    //check if the user created the basket
    if (basket.owner.toString() !== user.id) {
        res.status(401);
        throw new Error("Unauthorised delete.")
    }
    const deletedBasket = await Basket.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBasket);
})


// @desc Subscribe to a specific basket
// @route GET /api/basket/payment
// @access Private
const payment = asyncHandler(async (req, res) => {
    const prices = await stripe.prices.list({
        lookup_keys: [req.body.lookup_key],
        expand: ['data.product'],
    });
    const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [
            {
                price: prices.data[0].id,
                // For metered billing, do not pass quantity
                quantity: 1,

            },
        ],
        metadata: { basket_id: req.body.lookup_key },
        client_reference_id: req.user.id,
        mode: 'subscription',
        success_url: `http://localhost:3000/payment/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:3000/payment/?canceled=true`,
    });
    res.status(200).json(session.id);

})




// @desc Invest in a specific basket
// @route GET /api/basket/payment
// @access Private
const investBasket = asyncHandler(async (req, res) => {
    // check if basket id is valid
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error("Incorrect basket id")
    }
    const investment_amount = Number(req.body.amount);

    // find the basket
    const basket = await Basket.findById(req.params.id);
    const headers = {
        'X-MBX-APIKEY': binance_api_key
    }
    let list_post = [];
    basket.cryptoAlloc.forEach((crypto) => {
        let order_crypto = cryptoMap.get(crypto.cryptoSymbol.toLowerCase())
        const ts = Date.now();
        let quantity = (crypto.weight / 100) * investment_amount / order_crypto[1];
        if (order_crypto[0] === 'TRXUSDT') {
            quantity = quantity.toFixed(0)
        }
        else if (order_crypto[0] === 'XRPUSDT') {
            quantity = quantity.toFixed(1)
        }
        else if (order_crypto[0] === 'BTCUSDT') {
            quantity = quantity.toFixed(5)
        }
        else {
            quantity = quantity.toFixed(2)
        }
        const val = "symbol=" + order_crypto[0] + "&side=BUY&type=MARKET&quantity=" + quantity + "&timestamp=" + ts;
        const signature = hmacSHA256(val, binance_api_secret).toString();
        const post_url = "https://testnet.binance.vision/api/v3/order?" + val + "&signature=" + signature;
        const requestPromise = axios({
            method: 'post',
            url: post_url,
            headers: {
                'Content-Type': 'application/json',
                'X-MBX-APIKEY': binance_api_key
            }
        })
        list_post.push(requestPromise);
    });

    axios.all(list_post).then(axios.spread((...responses) => {
        transaction_response = []
        responses.forEach((response) => {
            transaction_response.push(response.data)
        })

        return transaction_response
        // use/access the results 
    })).then(async (transaction_response) => {

        let transaction_data = {
            'basketName': basket.basketName,
            'investmentAmount': investment_amount,
            'cryptoAlloc': []
        }
        transaction_response.forEach((transaction) => {
            let a = {
                'cryptoCurrency': transaction.symbol,
                'orderQty': transaction.fills[0].qty,
                'price': transaction.fills[0].price,
                'orderId': transaction.orderId
            }
            transaction_data['cryptoAlloc'].push(a)

        })
        var conditions = {
            _id: req.user.id,
            'investedBaskets.': { $ne: basket }
        };

        const user = await User.findByIdAndUpdate(conditions, { $push: {transactionLists: transaction_data }, $addToSet: { investedBaskets: basket } }, { new: true })
        res.status(200).json("Investment successfull")
    }).catch(errors => {
        res.status(400).json(errors)
        // react on errors.
    })

})

module.exports = {
    seedCrypto,
    getSpecificBasket,
    getBaskets,
    getUserBaskets,
    createBasket,
    deleteBasket,
    rebalanceBasket,
    editBasket,
    payment,
    getUserSubscribedBaskets,
    getUserInvestedBaskets,
    investBasket,
    getUserTransactions


}