const express = require('express');
// const Basket = require('../models/basket');
const router = express.Router();
const {ROLE} = require('../permissions')
const { getBaskets, getUserBaskets, createBasket, deleteBasket, rebalanceBasket } = require('../controllers/basketController')
const { protect, authRole } = require('../middleware/authMiddleware')

router.get('/', getBaskets);

router.get('/userBaskets', protect, getUserBaskets);

router.post('/createBasket', protect, authRole(ROLE.MANAGER), createBasket);

router.delete('/deleteBasket/:id', protect, authRole(ROLE.MANAGER), deleteBasket);

router.put('/rebalanceBasket/:id', protect, authRole(ROLE.MANAGER), rebalanceBasket);

// export default router;
module.exports = router;
