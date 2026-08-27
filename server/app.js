const express=require("express");
const app=express();
let cors=require("cors");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Members Only API");
})
const port=3000|process.env.PORT;
app.listen(port,(error)=>{
    if(error)throw error;
    console.log("Members only app initialized");
})