const {Router}=require("express");
let checklevel=require("../middleware/authorization/checklevel");
authrouter=Router();
authrouter.get("/me",checklevel);
module.exports=authrouter;