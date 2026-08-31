let query=require("./db/query");
let passport=require("passport");
let localstratergy=require('passport-local').Strategy;
let bcrypt=require("bcryptjs")
passport.use(
    new localstratergy(
        async(username,password,done)=>{
            try{
             let result=await query.checkusernamedb(username);
             let user=result.rows[0];
             if(!user){
                return done(null,false,{
                    message:"Invalid Username"
                });
             }
             const match=await bcrypt.compare(password,user.password)
             if(!match){
                done(null,false,{
                    message:"Wrong Password "
                })
             }
            return done(null,user);
            }
            catch(error){
            return done(error);
            }
        })
);
passport.serializeUser((user,done)=>{
   return done(null,user.id);
});
passport.deserializeUser(async(id,done)=>{
    let data=await query.finduserdb(id);
        return done(null,data.rows[0]);
});
