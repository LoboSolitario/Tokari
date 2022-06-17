const Basket = require('../models/basket');
const User = require('../models/user');
const asyncHandler = require('express-async-handler')
var ObjectId = require('mongoose').Types.ObjectId;

// @desc get list of all the baskets
// @route GET /api/baskets/
// @access public
const getBaskets = asyncHandler(async (req, res) => {
    const baskets = await Basket.find({ owner: req.user.id })
    res.status(200).json(baskets)
})

// @desc Create a new basket
// @route POST /api/baskets/createBasket
// @access public
const createBasket = asyncHandler(async (req, res) => {
    // if basketName is not written
    if (!req.body.basketName) {
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
        //   owner: req.body.owner
    });
    //save the new basket
    newBasket.save()
        .then(async (basket) => {
            //after creating the basket, append the basket id to the user schema for createdBaskets.
            const newBasket = { basketId: basket._id }
            const updatedUser = await User.findByIdAndUpdate(req.user.id, { $push: { createdBaskets: newBasket } }, { new: true });
            res.json(basket)
        })
        .catch(err => res.json(500, err));
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
    //find the user who is trying to create the basket.
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


// @desc rebalance a basket
// @route GET /api/baskets/rebalanceBasket/:id
// @access Private
const rebalanceBasket = asyncHandler(async (req, res) => {
    //Check if the passed :id is a valid mongodb _id
    if (!ObjectId.isValid(req.params.id)) {
        res.status(401);
        throw new Error("Incorrect basket id")
    }
    //find the basket to be deleted
    const basket = await Basket.findById(req.params.id);
    if (!basket) {
        res.status(400);
        throw new Error("Basket not found");
    }
    //find the user who is trying to delete the basket
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


module.exports = {
    getBaskets,
    createBasket,
    deleteBasket,
    rebalanceBasket,
}