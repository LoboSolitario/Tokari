const express = require('express');
const router = express.Router();
const {ROLE} = require('../permissions')
const { seedCrypto, getSpecificBasket, getBaskets, getUserBaskets, createBasket, deleteBasket, rebalanceBasket, editBasket } = require('../controllers/basketController')
const { protect, isLoggedIn, authRole } = require('../middleware/authMiddleware')

router.get('/', getBaskets);

router.get('/basket/:id', isLoggedIn, getSpecificBasket);

// router.get('/seedcrypto', seedCrypto)

router.get('/userBaskets', protect, getUserBaskets);

router.post('/createBasket', protect, authRole(ROLE.MANAGER), createBasket);

router.delete('/deleteBasket/:id', protect, authRole(ROLE.MANAGER), deleteBasket);

router.put('/editBasket/:id', protect, authRole(ROLE.MANAGER), editBasket);

router.put('/rebalanceBasket/:id', protect, authRole(ROLE.MANAGER), rebalanceBasket)
module.exports = router;
