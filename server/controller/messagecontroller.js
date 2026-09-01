let query=require("../db/query");
async function createmessage(req,res){
    try{
let text=req.body.text;
let result=await query.createmessagedb(text,req.user.id);
res.status(200).json({
messages:result.rows[0]
});
    }
    catch(error){
        console.log(error);
res.status(400).json({
    error:error.message
})
    }
}

async function viewallmessage(req,res){
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