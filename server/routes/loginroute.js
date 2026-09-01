const {Router}=require("express");
const loginrouter=Router();
const passport=require("passport");
loginrouter.post("/",passport.authenticate("local"),(req,res)=>{
    res.status(200).json({
        message:"User Logged In Successfully",
        user:{
            id: req.user.id,
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            username: req.user.username,
            is_member: req.user.is_member,
            is_admin: req.user.is_admin,
        }
    })
})
module.exports=loginrouter;