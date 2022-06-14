const User = require('../models/user');


// @desc get list of all users
// @route GET /api/users
// @access Private
const getUsers = (req,res) => {
    User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err }));
}

// @desc Register new user
// @route POST /api/users/register
// @access Public
const registerUser = (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        //   image: req.body.image
        //   subscribedBaskets: req.body.subscribedBaskets,
        //   createdBaskets: req.body.createdBaskets
        subscribedBaskets: [
            {
                basketID: req.body.subscribedBaskets.basketID,
                subscriptionDuration: req.body.subscribedBaskets.subscriptionDuration
            }
        ]
    });

    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.json(500, err));
}

// @desc delete user account.
// @route DELETE /api/users/deleteUser/:name
// @access Private
const deleteUser = (req, res) => {
    const userName = req.params.name;
    User.findOneAndDelete({ "username": userName })
        .then(user => res.json(user))
        .catch(err => res.json(500, err));
}

// @desc update user details
// @route PATCH /api/users/updateUser/:name
// @access Private
const updateUser = (req, res) => {
    const userName = req.params.name;
    User.updateOne(
        { "username": userName },
        req.body).then(user => res.json(user))
        .catch(err => res.json(500, err));
}



module.exports = {
    getUsers,
    registerUser,
    deleteUser,
    updateUser
}