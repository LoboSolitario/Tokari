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

router.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then(user => res.json(user))
        .catch(err => res.json(500, err));
});

router.put('/replaceUser/:id', (req, res) => {
    User.replaceOne(
        { _id: req.params.id },
        req.body).then(user => res.json(user))
        .catch(err => res.json(500, err));
});

router.patch('/updateUser/:id', (req, res) => {
    User.updateOne(
        { _id: req.params._id },
        req.body).then(user => res.json(user))
        .catch(err => res.json(500, err));
});

// export default router;
module.exports = router;