const express = require('express');

// import Basket from '../models/basket.js';
// const {Basket, basketSchema} = require('../models/basket');
const Basket = require('../models/basket');

const router = express.Router();

router.get('/', (req, res) => {
    Basket.find({})
        .then(baskets => res.json(baskets))
        .catch(err => res.status(500).json({ error: err }));
});

router.post('/createBasket', (req, res) => {
    const newBasket = new Basket({
        basketName: req.body.basketName,
        overview: req.body.overview,
        details: req.body.details,
        status: req.body.status,
        volatility: req.body.volatility,
        risk: req.body.risk,
        rebalanceFreq: req.body.rebalanceFreq,
        subscriptionFee: req.body.subscriptionFee
        //   owner: req.body.owner
    });

    newBasket.save()
        .then(basket => res.json(basket))
        .catch(err => res.json(500, err));
});
//discuss the workflow with jamba 
router.delete('/deleteBasket/:name', (req, res) => {
    const basketName = req.params.name;
    console.log(basketName);
    Basket.findOneAndDelete({ 'basketName': basketName })
        .then(basket => res.json(basket))
        .catch(err => res.json(500, err));
});

router.put('/rebalanceBasket/:basketname', (req, res) => {
    Basket.replaceOne(
        { 'basketName': req.params.basketname },
        req.body).then(basket => res.json(basket))
        .catch(err => res.json(500, err));
});

router.patch('/updateBasket/:basketname', (req, res) => {
    Basket.updateOne(
        { 'basketName': req.params.basketname },
        req.body).then(basket => res.json(basket))
        .catch(err => res.json(500, err));
});

// export default router;
module.exports = router;