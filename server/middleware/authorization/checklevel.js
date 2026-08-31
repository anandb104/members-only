function checklevel(req,res){
if(!req.isAuthenticate()){
    return res.json({
        user:null
    })
}
else{
    return res.json({
        id: req.user.id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        username: req.user.username,
        is_member: req.user.is_member
    });
}
}
module.exports=checklevel