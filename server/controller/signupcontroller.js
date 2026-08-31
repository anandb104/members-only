let query=require("../db/query");
const bcrypt=require("bcryptjs");
const {matchedData,validationResult}=require("express-validator")
async function signupcontroller(req,res){
    let errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }
    try{
        let data=matchedData(req);
    let firstname=data.firstname;
    let lastname=data.lastname;
    let username=data.username;
    let password=data.password;
    let result=await query.checkusernamedb(username);
    if(result.rows.length>0){
    return res.status(400).json({
        message:"Username Already Exists"
    })
    }
    let hashedpassword=await bcrypt.hash(password,10);
    await query.signupdb(firstname,lastname,username,hashedpassword);
    res.status(201).json({
        message:"Account Created Successfully"
    })
    }
    catch(error){
     console.error(error);
     res.status(500).json({
        message:"Something went wrong"
     }
     )
    }
}
module.exports=signupcontroller
