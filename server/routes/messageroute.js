let auth=require("../middleware/authorization/auth");
let messagecontroller=require("../controller/messagecontroller");
let {Router}=require("express");
let messagerouter=Router();
messagerouter.post("/",auth,messagecontroller.createmessage);
module.exports=messagerouter;