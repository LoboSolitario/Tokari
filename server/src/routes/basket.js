const express = require('express');
const Basket = require('../models/basket');
const router = express.Router();
const {getBaskets, createBasket, deleteBasket, rebalanceBasket, updateBasket} = require('../controllers/basketController')

router.get('/', getBaskets);

router.post('/createBasket', createBasket);
//discuss the workflow with jamba -> change it to id
router.delete('/deleteBasket/:basketname', deleteBasket);

router.put('/rebalanceBasket/:basketname', rebalanceBasket);

router.patch('/updateBasket/:basketname', updateBasket);

// export default router;
module.exports = router;
