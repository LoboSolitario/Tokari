const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')


// @desc get list of all users
// @route GET /api/users
// @access Private
const getAllUsers = (req, res) => {
    User.find({}).select('-password')
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err }));
}

// @desc get details about the specific user
// @route POST /api/users/userDetails
// @access Private
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

// @desc login a user.
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Authentication Failed')
    }
})

// @desc Register new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    let newUser;
    try {
        newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            role: role
        })
    } catch (error) {
        res.status(400);
        throw new Error(error)
    }

    if (newUser) {
        res.status(201).json({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            token: generateToken(newUser._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid User data');
    }
})

// @desc delete user account.
// @route DELETE /api/users/deleteUser/:id
// @access Private
const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.json(500, err));
}

// @desc update user details
// @route PATCH /api/users/updateUser/:id
// @access Private
const updateUser = (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body).then(user => res.json(user))
        .catch(err => res.json(500, err));
}



// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    getAllUsers,
    registerUser,
    loginUser,
    getUser,
    deleteUser,
    updateUser
}