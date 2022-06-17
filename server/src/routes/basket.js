const express = require('express');
// const Basket = require('../models/basket');
const router = express.Router();
const { getBaskets, createBasket, deleteBasket, rebalanceBasket } = require('../controllers/basketController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getBaskets);

router.post('/createBasket', protect, createBasket);

router.delete('/deleteBasket/:id', protect, deleteBasket);

router.put('/rebalanceBasket/:id', protect, rebalanceBasket);

// export default router;
module.exports = router;
