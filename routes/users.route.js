//create mini-express app(Router)
const exp = require("express");
const userApp = exp.Router();

const {
  getAllUsers,
  getUserByEmail,
  createNewUser,
  modifyUser,
  deleteUserByEmail,
} = require("../controllers/users.controller");


//body parser
userApp.use(exp.json());

//create routes(API)

//route to gte all users
userApp.get("/users", getAllUsers);

//route to get user by email
userApp.get("/user/:email", getUserByEmail);

//route for POST req
userApp.post("/create-user", createNewUser);

//route for PUT req
userApp.put("/modify-user", modifyUser);

//route for DELETE req
userApp.delete("/delete-user", deleteUserByEmail);

//export userApp
module.exports = userApp;
