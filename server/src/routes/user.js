const express = require('express');
const { getAllUsers, getUser, registerUser, loginUser, deleteUser, updateUser, getInvestorStats, landingPageBaskets } = require('../controllers/userController')
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')


router.get('/', getAllUsers);

router.get('/investorStats', protect, getInvestorStats);

router.get('/landingPageBaskets', landingPageBaskets)

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/userDetails', protect, getUser);

router.delete('/deleteUser/:id', deleteUser);

router.patch('/updateUser/:id', updateUser);


module.exports = router;