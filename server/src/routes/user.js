const express = require('express');

// import User from '../models/user.js';
// const {User, userSchema} = require('../models/user');
const User = require('../models/user');
// const bodyParser = require('body-parser');

const router = express.Router();


router.get('/', (req, res) => {
    User.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err }));
});

router.post('/createUser', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email
        //   image: req.body.image
        //   subscribedBaskets: req.body.subscribedBaskets,
        //   createdBaskets: req.body.createdBaskets
    });

    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.json(500, err));
});

router.delete('/deleteUser/:name', (req, res) => {
    const userName = req.params.name;
    User.findOneAndDelete({ "username": userName })
        .then(user => res.json(user))
        .catch(err => res.json(500, err));
});

router.put('/replaceUser/:name', (req, res) => {
    const userName = req.params.name;
    User.replaceOne(
        { "username": userName },
        req.body).then(user => res.json(user))
        .catch(err => res.json(500, err));
});

router.patch('/updateUser/:name', (req, res) => {
    const userName = req.params.name;
    User.updateOne(
        { "username": userName },
        req.body).then(user => res.json(user))
        .catch(err => res.json(500, err));
});

// export default router;
module.exports = router;