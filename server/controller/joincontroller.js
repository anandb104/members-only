let query=require("../db/query")
require("dotenv").config();
async function joincontroller(req,res){
    try{
    let passcode=req.body.passcode;
    if(passcode!=process.env.PASSCODE){
        return res.json({
        message:"Wrong Passcode"
        })
    }
    await query.updatememberdb(req.user.id);
    res.status(200).json({
        message:"You are now a member",
        user: {
          id: req.user.id,
          first_name: req.user.first_name,
          last_name: req.user.last_name,
          username: req.user.username,
          is_member: true,
          is_admin: req.user.is_admin
      }
    })
    }
    catch{
      res.status(400).json({
        error:error
      })
    }
}
module.exports=joincontroller;