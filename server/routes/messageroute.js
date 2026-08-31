let auth=require("../middleware/authorization/auth");
let reqadmin=require("../middleware/authorization/requireadmin");
let messagecontroller=require("../controller/messagecontroller");
let {Router}=require("express");
let messagerouter=Router();
messagerouter.post("/",auth,messagecontroller.createmessage);
messagerouter.delete("/:id",reqadmin,messagecontroller.deletemessage)
module.exports=messagerouter;