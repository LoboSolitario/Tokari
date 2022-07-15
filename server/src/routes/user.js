const express = require('express');
const { getAllUsers, getUser, registerUser, loginUser, deleteUser, updateUser, getInvestorStats, getBasketsOfManager } = require('../controllers/userController')
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')


router.get('/', getAllUsers);

router.get('/investorStats', protect, getInvestorStats);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/userDetails', protect, getUser);

router.delete('/deleteUser/:id', deleteUser);

router.patch('/updateUser/:id', updateUser);

router.get('/manager/:id', getBasketsOfManager);


module.exports = router;