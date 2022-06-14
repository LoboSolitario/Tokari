const express = require('express');

// import User from '../models/user.js';
// const {User, userSchema} = require('../models/user');
const User = require('../models/user');
// const bodyParser = require('body-parser');
const {getUsers, registerUser, deleteUser, updateUser} = require('../controllers/userController')

const router = express.Router();


router.get('/', getUsers);

router.post('/register', registerUser);

router.delete('/deleteUser/:name', deleteUser);

router.patch('/updateUser/:name', updateUser);

// export default router;
module.exports = router;