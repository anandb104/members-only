const {body}=require("express-validator");
const singupvalidator=[
    body("firstname")
    .trim()
    .notEmpty()
    .withMessage("Please fill the first name"),

    body("lastname")
    .trim()
    .notEmpty()
    .withMessage("Please fill the Last name"),

    body("username")
    .trim(),
    
    body("password")
    .trim()
    .notEmpty()
    .isLength({min:8})
    .withMessage("The password should be of minimum 8 characters"),

    body("confirmpassword")
    .trim()
    .notEmpty()
    .withMessage("The confirm Password should be not empty")
    .isLength({min:8})
    .withMessage("The password should be of minimum 8 characters")
    .custom((value,{req})=>{
        return value==req.body.password;
    })
    .withMessage("Passwords do not match")
]
module.exports=singupvalidator;