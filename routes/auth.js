const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

router.get('/hello',(req,res)=>{
    res.send("Hi");
})

router.post('/signup',AuthController.signup);
router.post('/login',AuthController.login);






module.exports = router;