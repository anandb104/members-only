const express=require("express");
const app=express();
let cors=require("cors");
let signuprouter=require("./routes/signuproute");
let loginrouter=require("./routes/loginroute");
let logoutrouter=require("./routes/logoutroute");
const session=require("express-session");
const pgsession=require("connect-pg-simple")(session);
const passport=require("passport");
require("./passport");
let pool=require("./db/pool");
require("dotenv").config();
app.use(
    session({
        store:new pgsession({
            pool:pool,
            tableName:"session"
        }),
        secret:process.env.SECRET,
        resave:false,
      saveUninitialized:false
    
}))
app.use(passport.initialize());
app.use(passport.session());
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/signup",signuprouter);
app.use("/login",loginrouter);
app.use("/logout",logoutrouter);
const port=3000|process.env.PORT;
app.listen(port,(error)=>{
    if(error)throw error;
    console.log("Members only app initialized");
})