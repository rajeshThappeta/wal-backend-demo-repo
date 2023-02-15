//create express app
//import express
const exp = require("express");
//call function
const app = exp();

require('dotenv').config()

//import connection
const connection=require("./database/db.config")
//check db connection
connection.connect((err)=>{
  if(err){
      console.log("Err in DB connect :",err)
  }
  else{
      console.log("DB connection success")
  }

})









//assign port
let port=process.env.PORT||4000;
app.listen(port, () => console.log(`Server on port ${port}...`));

//import userApp
const userApp=require("./routes/users.route")
//const productApp=require("./APIs/productApi")
const projectAssignmentApp=require("./routes/project-assignment.route")

//inform to http server to excure userApp when req reached to userApi
app.use("/user-api",userApp)
//app.use("/product-api",productApp)
app.use('/project-assignment-api',projectAssignmentApp)

//handle invalid path
app.use("*",(req,res,next)=>{
  res.send({message:"Invalid path"})
})

//handle errors
app.use((err,req,res,next)=>{
  res.send({message:"Error occurred",error:err.message})
})