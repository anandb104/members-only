let signupcontroller=require("../controller/signupcontroller");
let singupvalidator=require("../validators/signupvalidators");
const {Router}=require("express");
let signuprouter=Router();
signuprouter.post("/",singupvalidator,signupcontroller);
module.exports=signuprouter