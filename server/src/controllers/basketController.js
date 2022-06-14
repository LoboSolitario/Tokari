const Basket = require('../models/basket');

// @desc get list of all the baskets
// @route GET /api/baskets/
// @access public
const getBaskets = (req, res) => {
    Basket.find({})
        .then(baskets => res.json(baskets))
        .catch(err => res.status(500).json({ error: err }));
}

// @desc Create a new basket
// @route POST /api/baskets/createBasket
// @access public
const createBasket = (req, res) => {
    const newBasket = new Basket({
        basketName: req.body.basketName,
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

    newBasket.save()
        .then(basket => res.json(basket))
        .catch(err => res.json(500, err));
}

// @desc delete a specific basket
// @route GET /api/baskets/deleteBasket/:name
// @access Private
const deleteBasket = (req, res) => {
    const basketName = req.params.basketname;
    Basket.findOneAndDelete({ 'basketName': basketName })
        .then(basket => res.json(basket))
        .catch(err => res.json(500, err));
}

// @desc rebalance a basket
// @route GET /api/baskets/rebalanceBasket/:basketname
// @access Private
const rebalanceBasket = (req, res) => {
    Basket.replaceOne(
        { 'basketName': req.params.basketname },
        req.body).then(basket => res.json(basket))
        .catch(err => res.json(500, err));
}

// @desc update a basket
// @route GET /api/baskets/updateBasket/:basketname
// @access Private
const updateBasket = (req, res) => {
    Basket.updateOne(
        { 'basketName': req.params.basketname },
        req.body).then(basket => res.json(basket))
        .catch(err => res.json(500, err));
}

module.exports = {
    getBaskets,
    createBasket,
    deleteBasket,
    rebalanceBasket,
    updateBasket
}