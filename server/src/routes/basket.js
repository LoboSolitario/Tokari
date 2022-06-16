const express = require('express');
// const Basket = require('../models/basket');
const router = express.Router();
const {getBaskets, createBasket, deleteBasket, rebalanceBasket, updateBasket} = require('../controllers/basketController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getBaskets);

router.post('/createBasket', protect, createBasket);
//discuss the workflow with jamba -> change it to id
router.delete('/deleteBasket/:id', protect, deleteBasket);

router.put('/rebalanceBasket/:id', protect, rebalanceBasket);

router.patch('/updateBasket/:id', protect, updateBasket);

// export default router;
module.exports = router;
