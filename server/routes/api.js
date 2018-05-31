const express = require ('express');
const jwt = require ('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const Candidature = require('../models/candidature');
const mongoose = require('mongoose');
const db = "mongodb://admin:21035363@ds111370.mlab.com:11370/tutodb"

mongoose.connect(db, err => {
    if (err){
        console.error('Error!' + err)
    }else{
        console.log('Connected to mongodb')
    }
})


function verifyToken(req, res, next) {
    if (!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === null){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.post('/register', (req,res) =>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error){
            console.log(error)
        }else{
            let payload = { subject: registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

router.delete('/users/', (req,res) =>{
    User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
        if (err) {
            console.log(err)
          }else{
            res.status(200)
          }
      });
})



/* SAVE CANDIDATURE */
router.post('/candidatures', (req,res) =>{
    let candidatureData = req.body;
    let candidature = new Candidature(candidatureData);
    candidature.save((error, registeredCandidature) => {
        if (error){
            console.log(error)
        }else{
            console.log(candidature);
            res.status(200).send(registeredCandidature);
        }
    })
})

/* GET ALL CANDIDATURES */
router.get('/candidatures', verifyToken, function(req, res) {
    Candidature.find(function (err, candidatures) {
      if (err) return (err);
      console.log(candidatures);
      res.json(candidatures);
    });
})

/* GET SINGLE CANDIDATURE BY ID */
router.get('/candidature/:id', function(req, res) {
    Candidature.findById(req.params.id, function (err, candidature) {
      res.json(candidature);
    });
});

/* GET SINGLE USER BY ID */
router.get('/register/:id', function(req, res) {
    User.findById(req.params.id, function (err, user) {
      res.json(user);
    });
});

/* UPDATE CANDIDATURE */
router.put('/candidature/:id', function(req, res) {
    Candidature.findByIdAndUpdate(req.params.id, req.body, function (err, candidature) {
      if (err) {
        console.log(err)
      }else{
        res.json(candidature);
      }
    });
});
  
/* DELETE CANDIDATURE */
router.delete('/candidature/:id', function(req, res, next) {
    Candidature.findByIdAndRemove(req.params.id, req.body, function (err, candidature) {
      if (err) return next(err);
      res.json(candidature);
    });
});

/* MODIFY USER */
router.put('/:id', function(req, res, next) {
    let userData = req.body

    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
      if (err) return next(err);
      res.json(user);
    });
});


router.post('/login', (req,res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) =>{
        if (error){
            console.log(error)
        }else{
            if (!user){  // if we not find a user with the email
                res.status(401).send('Invalid email')
            }else{
                if (user.password !== userData.password){ //if the password is not correct
                    res.status(401).send('Invalid password')
                }else{
                    let payload ={subject: user._id}
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                }
            } 
        }
    })
})

    
module.exports = router;