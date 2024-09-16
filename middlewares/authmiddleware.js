const jwt = require('jsonwebtoken');

module.exports.auth = async (req,res,next)=>{


    const token = req.cookies.jwt;

    // console.log(req.cookies);
    if(token){
       const verify = await jwt.verify(token,process.env.SECRET_KEY);

       if(verify){
            next();    
       }else{
        res.status(401).json({success:false,"message":"Unauthenticated User"});
       }
    }else{ 
        res.status(401).json({success:false,"message":"Unauthenticated User"});
    }
}