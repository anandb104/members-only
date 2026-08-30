const {Router}=require("express");
let logoutrouter=Router();
logoutrouter.post("/",(req,res)=>{
    req.logout((error)=>{
        if(error){
            res.status(400).json({
                error:error
            })
        }
        else{
            res.status(200).json({
                message:"User Logged Out Successfully"
            })
        }
    })
})
module.exports=logoutrouter