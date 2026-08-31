const pool=require("./pool");
async function signupdb(firstname,lastname,username,password){
await pool.query(`INSERT INTO users(first_name,last_name,username,password) VALUES ($1,$2,$3,$4)`,[firstname,lastname,username,password]);
}
async function checkusernamedb(username){
return await pool.query(`SELECT * FROM users WHERE username=($1)`,[username])
}
async function finduserdb(id){
  return  await pool.query(`SELECT * FROM users WHERE id=($1)`,[id])
}
async function createmessagedb(title,text,user_id){
  await pool.query("INSERT INTO message (title,text,user_id) VALUES ($1,$2,$3)",[title,text,user_id]);
}
async function viewallmessagedb(){
 return await pool.query("SELECT title,text,timestamp,user_id from message");
}
async function updatememberdb(id){
   await pool.query("UPDATE users SET is_member=true WHERE id=($1)",[id]);
 }
module.exports={
    signupdb,
    checkusernamedb,
    finduserdb,
    createmessagedb,
    viewallmessagedb,
    updatememberdb
}