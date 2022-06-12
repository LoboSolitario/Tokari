const express = require('express');

// import Basket from '../models/basket.js';
// const {Basket, basketSchema} = require('../models/basket');
const Basket = require('../models/basket');

const router = express.Router();

router.get('/baskets', (req, res) => {
    Basket.find({})
    .then(baskets => res.json(baskets))
    .catch(err => res.status(500).json({ error: err }));
});

router.post('/createBaskets', (req, res) => {
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

router.delete('/deleteBasket/:id', (req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id)
    .then(basket => res.json(basket))
    .catch(err => res.json(500, err));
});

router.put('/replaceBasket/:id', (req, res) => {
    User.replaceOne(
        {_id: req.params.id},
        req.body).then(basket => res.json(basket))
    .catch(err => res.json(500, err));
});

router.patch('/updateBasket/:id', (req, res) => {
    User.updateOne(
        {_id: req.params.id},
        req.body).then(basket => res.json(basket))
    .catch(err => res.json(500, err));
});

// export default router;
module.exports = router;