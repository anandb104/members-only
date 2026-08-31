let query=require("../db/query");
async function createmessage(req,res){
    try{
let title=req.body.title;
let text=req.body.text;
let userid=req.body.user.id;
await query.createmessagedb(title,text,userid);
res.status(200).json({
message:"message created successfully"
})
    }
    catch(error){
res.send(400).json({
    message:error.message
})
    }
}

async function viewallmessage(res){
    try{
     let result=await query.viewallmessagedb();
     res.status(200).json({
        messages:result.rows
     })
    }
    catch(error){
     res.status(400).json({
        error:error.message
     })
    }
}
async function deletemessage(res){
    let id=req.params;
    try{
     await query.deletemessagedb(id);
    }
    catch(error){
     res.status(400).json({
        error:error.message
     })
    }
}
module.exports={
    createmessage,
    viewallmessage,
    deletemessage
}