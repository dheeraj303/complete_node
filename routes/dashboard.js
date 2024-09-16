const express = require('express');
const DashboardController = require('../controllers/DashboardController');
const authMiddleware = require('../middlewares/authmiddleware');
const router = express.Router();

// router.get('/hello',(req,res)=>{
//     res.send("Hi");
// })


router.get('/dashboard',authMiddleware.auth,DashboardController.dashboard);






module.exports = router;