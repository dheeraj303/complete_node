const User = require('../models/User');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
module.exports.signup = async(req,res)=>{

    try{
        const password = req.body.password;
        const hash = await bcrypt.hash(password, 10)
        console.log(hash);
        const user = new User(req.body);
        user.password = hash;
        const result = await user.save();
        console.log(result);
        return res.status(200).json({success:true,user:user});


    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,error:err});
    }
}


module.exports.login = async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});

        if(user){
            const matched = await bcrypt.compare(req.body.password, user.password);
            if(matched){
                console.log("login successfull");

                const token = jwt.sign({user:user},process.env.SECRET_KEY);
                console.log(token);
                res.cookie('jwt')
                return res
                .cookie("jwt", token, {
                  httpOnly: true,
                }).status(200).json({success:true,message:"Login Successfull",token:token});
                
            }else{
                console.log("incorrect pasword");
                return res.status(400).json({success:false,message:"Incorrect Password"});
            }
        }else{
            console.log("no user found");
            return res.status(400).json({success:false,message:"No User Found"});
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,error:err});
    }
}