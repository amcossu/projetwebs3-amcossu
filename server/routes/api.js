const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Candidature = require('../models/candidature');

const mongoose = require('mongoose');
const db = "mongodb://admin:21035363@ds111370.mlab.com:11370/tutodb"

/* Database connection */
mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

/* User registration */
router.post('/register', (req, res) => {

    let userData = req.body;
    let user = new User(userData);

    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

/* User login */
router.post('/login', (req, res) => {

    let userData = req.body

    User.findOne({
        email: userData.email
    }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) { // If we not find a user with the email
                res.status(401).send('Invalid email')
            } else {
                if (user.password !== userData.password) { // If the password is not correct
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(user)
                }
            }
        }
    })
})

/* Candidature registration */
router.post('/candidature', (req, res) => {
    let candidatureData = req.body;
    let candidature = new Candidature(candidatureData);
    candidature.save((error, registeredCandidature) => {
        if (error) {
            console.log(error)
        } else {
            console.log(candidature);
            res.status(200).send(registeredCandidature);
        }
    })
})

/* Show list of all candidatures */
router.get('/candidature', function (req, res) {
    let id = req.get('userId');
    Candidature.find({
        userId: id
    }, (err, candidatures) => {
        if (err) return (err);
        console.log("test" + candidatures);
        res.json(candidatures);
    });
})

/* Show single candidature */
router.get('/details', function (req, res) {
    let id = req.get('candidatureId');
    Candidature.findOne(req.params.id, (err, candidature) => {
        if (err) return (err);
        console.log(candidature);
        res.json(candidature);
    });
});


/* Update candidature */
router.put('/candidature/:id', function (req, res, next) {
    Candidature.findByIdAndUpdate(req.params.id, req.body, function (err, candidature) {
        if (err) return next(err);
        res.json(candidature);
    });
});

/* Delete candidature */
router.delete('/candidature/:id', function (req, res) {
    Candidature.findByIdAndRemove(req.params.id,req.body, function (err, candidature) {
        if (err) return (err);
        res.json(candidature);
    });
});

module.exports = router;