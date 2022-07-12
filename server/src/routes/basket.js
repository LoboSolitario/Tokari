const express = require('express');
const router = express.Router();
const {ROLE} = require('../permissions')
const { seedCrypto, investBasket, unsubscribeBasket, getUserInvestedBaskets, getUserTransactions, getSpecificBasket, getBaskets, getUserBaskets, createBasket, deleteBasket, rebalanceBasket, editBasket,  payment, getUserSubscribedBaskets} = require('../controllers/basketController')
const { protect, isLoggedIn, authRole } = require('../middleware/authMiddleware')

router.get('/', getBaskets);

router.get('/basket/:id', isLoggedIn, getSpecificBasket);

// router.get('/seedcrypto', seedCrypto)

router.get('/userBaskets', protect, getUserBaskets);

router.get('/userSubscribedBaskets',protect, getUserSubscribedBaskets)

router.get('/userInvestedBaskets',protect, getUserInvestedBaskets)

router.get('/userTransactions',protect, getUserTransactions )

router.post('/createBasket', protect, authRole(ROLE.MANAGER), createBasket);

router.post('/payment', protect, authRole(ROLE.INVESTOR),payment);

router.post('/invest/:id',protect, investBasket);

router.delete('/deleteBasket/:id', protect, authRole(ROLE.MANAGER), deleteBasket);

router.put('/editBasket/:id', protect, authRole(ROLE.MANAGER), editBasket);

router.put('/rebalanceBasket/:id', protect, authRole(ROLE.MANAGER), rebalanceBasket);

// router.delete('/unsubscribeBasket/:id', protect, authRole(ROLE.INVESTOR), unsubscribeBasket);
router.delete('/unsubscribeBasket/:id', protect, unsubscribeBasket);


module.exports = router;
