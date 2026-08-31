function requireauth(req,res,next){
if(!req.isAuthenticated()){
return res.status(400).json({
    message:"User not Logged in"
})
}
next();
}
module.exports=requireauth;