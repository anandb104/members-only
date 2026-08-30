const {Router}=require("express");
const loginrouter=Router();
const passport=require("passport");
loginrouter.post("/",passport.authenticate("local"),(req,res)=>{
    res.status(200).json({
        message:"User Logged In Successfully",
        user:req.user
    })
})
module.exports=loginrouter;