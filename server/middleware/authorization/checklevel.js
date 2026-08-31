function checklevel(req,res){
if(!req.isAuthenticate()){
    return res.json({
        user:null
    })
}
else{
    return res.json({
        user:req.user
    })
}
}
module.exports=checklevel