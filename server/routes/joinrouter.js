const {Router}=require("express");
let joinrouter=Router();
let joincontroller=require("../controller/joincontroller.js");
let auth=require("../middleware/authorization/auth");
joinrouter.get("/",auth);
joinrouter.post("/",auth,joincontroller);
module.exports=joinrouter;