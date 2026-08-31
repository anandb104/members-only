function requireadmin(req,res){
    if(!req.isAuthenticated()){
        return res.status(400).json({
        message:"You need to log in"
        })
    }
    if(!req.is_admin!=true){
        return res.status(400).json({
            message:"Admin access required"
        })
    }
}
module.exports=requireadmin;