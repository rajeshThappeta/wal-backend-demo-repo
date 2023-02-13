//create express app
//import express
const exp = require("express");
//call function
const app = exp();

//assign port
app.listen(4000, () => console.log("Server on port 4000..."));

//import userApp
const userApp=require("./routes/users.route")
//const productApp=require("./APIs/productApi")

//inform to http server to excure userApp when req reached to userApi
app.use("/user-api",userApp)
//app.use("/product-api",productApp)

//handle invalid path
app.use("*",(req,res,next)=>{
  res.send({message:"Invalid path"})
})

//handle errors
app.use((err,req,res,next)=>{
  res.send({message:"Error occurred",error:err.message})
})