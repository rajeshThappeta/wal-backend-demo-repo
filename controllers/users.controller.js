//import connection
const connection = require("../database/db.config");

const expressAsyncHandler = require("express-async-handler");

const db = connection.promise();

//get all users
const getAllUsers = expressAsyncHandler(async (req, res, next) => {
  //get data from wal_table
  let [rows, fields] = await db.query("select * from users"); //[ [] ,[]]=
  //send res
  res.send({ message: "emps", payload: rows });
});

//get user by name
const getUserByEmail = expressAsyncHandler(async (req, res) => {
  //get name from url
  let nameFromUrl = req.params.name;

  //get user by name in db
  let [rows] = await db.query("select * from users where name=?",nameFromUrl);

  //if user not found
  if (rows[0] == undefined) {
    res.send({ message: "No user found" });
  }
  //if user found
  else {
    res.send({ message: "user", payload: rows[0] });
  }
});







//create user
const createNewUser = expressAsyncHandler(async(req,res)=>{
    
    //get user from req
    let {name,dob,designation,gender}=req.body;
    //find duplicate user
    let [rows]=await db.query('select * from users where name=?',name)
    //if duplicate user existed, send res as dup user
    if(rows[0]!==undefined){
      res.send({message:"User already existed"})
    }
    //else insert new user in uses db
    else{
      await db.query('insert into users set name=?,dob=?,designation=?,gender=?',[name,dob,designation,gender]);
      res.send({message:"User created"})
    }

})


















//modify user
const modifyUser = expressAsyncHandler(async(req,res)=>{

  //get modified user from req
  let {name,dob,designation,gender}=req.body;
  //check user existance
  let [rows]=await db.query('select * from users where name=?',name);
  //if user not existed
  if(rows[0]==undefined){
    res.send({message:"No user found to update"})
  }
  else{
    await db.query("update users set name=?,dob=?,designation=?,gender=? where name=?",[name,dob,designation,gender,name])
    res.send({message:"User modified"})
  }
})








//delete user my email
const deleteUserByEmail = (req, res) => {};

//export all user conreollers
module.exports = {
  getAllUsers,
  getUserByEmail,
  createNewUser,
  modifyUser,
  deleteUserByEmail,
};
