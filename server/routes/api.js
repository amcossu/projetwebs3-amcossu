const express = require ('express');
const jwt = require ('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb://admin:21035363@ds111370.mlab.com:11370/tutodb"

mongoose.connect(db, err => {
    if (err){
        console.error('Error!' + err)
    }else{
        console.log('Connected to mongodb')
    }
})
router.get('/', (req,res) => {
    res.send('From API route');
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

router.get('/jobs', verifyToken, (req,res) =>{
    let jobs =[
        {
            "job": "Développeur web",
            "company": "Passerelle Numérique",
            "offer_description": "Développeur Angular",
            "offer_code":"AERT",
            "contact":"pass@num.com",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "job": "Développeur JS full-stack",
            "company": "Jobs",
            "offer_description": "Développeur JS et Node.js",
            "offer_code":"RTU25",
            "contact":"jobs@jobs.com",
            "date": "2012-04-23T18:25:43.511Z"
          },
        ]
   
})
    
module.exports = router;