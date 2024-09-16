

module.exports.dashboard = (req,res)=>{


    try{
        const obj = {
            "information_type" :"confidential"
        }

        res.json({success:true,"message":"confidential info" , obj:obj});
    }catch(err){
        console.log(err);
    }
}