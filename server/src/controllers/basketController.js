const Basket = require('../models/basket');
const User = require('../models/user');
const Crypto = require('../models/crypto')
const asyncHandler = require('express-async-handler')
var ObjectId = require('mongoose').Types.ObjectId;

// @desc seed for crypto data
// @route GET /api/baskets/cryptoseed
// @access public
const seedCrypto = asyncHandler(async (req, res) => {
    const cryptoList = [
        {
            "cryptoName" : "Bitcoin",
            "cryptoSymbol" : "BTC",
            "cryptoPrice" : "20900.21312"
        },
        {
            "cryptoName" : "Ethereum",
            "cryptoSymbol" : "ETH",
            "cryptoPrice" : "3214"
        },
        {
            "cryptoName" : "Litecoin",
            "cryptoSymbol" : "LTC",
            "cryptoPrice" : "123.21312"
        },
        {
            "cryptoName" : "Tron",
            "cryptoSymbol" : "TRX",
            "cryptoPrice" : "29500.21312"
        },
        {
            "cryptoName" : "XRP",
            "cryptoSymbol" : "XRP",
            "cryptoPrice" : "30.21312"
        },
        {
            "cryptoName" : "Binancecoin",
            "cryptoSymbol" : "BNB",
            "cryptoPrice" : "20320.21312"
        }
    ]

    const newCrypto =   await Crypto.create(cryptoList).catch(err => res.status(400, err));
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
    const basket = await Basket.findById(basketId);
    if (!basket) {
        res.status(400);
        throw new Error("Basket not found");
    }

    // If the basket is free, send the basket with cryptoAlloc data
    if (basket.subscriptionFee == 0){
        res.status(200).json(basket);
    } else {        // If the basket is not free, check whether the user have access to the cryptoAlloc Data
        // Check if the user is authenticated
        if (res.locals.authenticated){
            //find the user who is trying to view the basket
            const user = await User.findById(req.user.id);
            
            // Check if there is a user and they have access to the basket
            if (user && ((user.subscribedBaskets.some(el => el.basketId.toString() === basketId)) || (basket.owner.toString() !== user.id))) {
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
    const baskets = await Basket.find({})
    res.status(200).json(baskets)
})


// @desc get list of all the baskets of a user
// @route GET /api/baskets/userBaskets
// @access public
const getUserBaskets = asyncHandler(async (req, res) => {
    const baskets = await Basket.find({ owner: req.user.id })
    res.status(200).json(baskets)
})

// @desc Create a new basket
// @route POST /api/baskets/createBasket
// @access public
const createBasket = asyncHandler(async (req, res) => {
    // if basketName is not written
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
        cryptoAlloc: req.body.cryptoAlloc
    });
    //save the new basket
    newBasket.save()
        .then(async (basket) => {
            //after creating the basket, append the basket id to the user schema for createdBaskets.
            const newBasket = { basketId: basket._id }
            const updatedUser = await User.findByIdAndUpdate(req.user.id, { $push: { createdBaskets: newBasket } }, { new: true });
            res.json(basket)
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

    const cryptoAlloc = JSON.parse(req.body.cryptoAlloc)
    const updatedBasket = await Basket.findByIdAndUpdate(req.params.id, {cryptoAlloc: cryptoAlloc}, { new: true });
    res.status(200).json(updatedBasket);
})


// @desc delete a specific basket
// @route GET /api/baskets/deleteBasket/:id
// @access Private
const deleteBasket = asyncHandler(async (req, res) => {
    //Check if the passed :id is a valid mongodb _id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(401);
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

module.exports = {
    seedCrypto,
    getSpecificBasket,
    getBaskets,
    getUserBaskets,
    createBasket,
    deleteBasket,
    rebalanceBasket,
    editBasket
}