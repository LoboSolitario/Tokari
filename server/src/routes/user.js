const express = require('express');
const { getAllUsers, getUser, registerUser, loginUser, deleteUser, updateUser } = require('../controllers/userController')
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')


router.get('/', getAllUsers);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/userDetails', protect, getUser);

router.delete('/deleteUser/:name', deleteUser);

router.patch('/updateUser/:name', updateUser);

// export default router;
module.exports = router;