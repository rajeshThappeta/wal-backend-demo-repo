//create express app
//import express
const exp = require("express");
//call function
const app = exp();

//assign port
app.listen(4000, () => console.log("Server on port 4000..."));

//sample data
let users = [
  {
    username: "kiran",
    email: "kiran@mail.com",
    age: 21,
  },
];

//create routes(API)

//route for GET req of users
app.get("/users", (req, res) => {
  res.send({ message: "Users data", payload: users });
});

//body parser
app.use(exp.json());

//route for POST req
app.post("/create-user", (req, res) => {
  //get user from req
  let newUser = req.body;
 
  // check user already existed with username of newUser
  //if user existed, send responce to client as "user existed"
  //if user not existed, then push to users array
  //send res
});









//route for PUT req
app.put("/modify-user", (req, res) => {
  res.send({ message: "User modified" });
});

//route for DELETE req
app.delete("/delete-user", (req, res) => {
  res.send({ message: "User deleted" });
});
