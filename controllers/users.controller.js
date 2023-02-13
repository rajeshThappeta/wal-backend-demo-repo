//sample data
let users = [
  {
    username: "kiran",
    email: "kiran@mail.com",
    age: 21,
  },
];

//get all users
const getAllUsers = (req, res) => {
  res.send({ message: "Users data", payload: users });
};

//get user by email
const getUserByEmail = (req, res) => {
  //get email from url
  let emailFromfUrl = req.params.email; //{ email :"bhanu@mail.com"}
  //search for user with received email
  let userOfStore = users.find((userObj) => userObj.email === emailFromfUrl);
  //if user not found, send same res to client
  if (userOfStore === undefined) {
    res.send({ message: "User not found" });
  }
  //if user found, send  user as res
  else {
    res.send({ message: "User found", payload: userOfStore });
  }
};

//create user
const createNewUser = (req, res) => {
  //get user from req
  let newUser = req.body;

  // check user already existed with email of newUser
  let userOfData = users.fid((userObj) => userObj.email === newUser.email);
  //if user not existed, then insert new user
  if (userOfData === undefined) {
    users.push(newUser);
    res.send({ message: "New user created" });
  }
  //if user existed, send responce to client as "user existed"
  else {
    res.send({ message: "User already existed with that email" });
  }
};


//modify user
const modifyUser = (req, res) => {
  //get modified user from req
  let modifiedUser = req.body;
  //find index of user to be modified
  let indexOfUser = users.findIndex(
    (userObj) => userObj.email === modifiedUser.email
  );
  //if user not found
  if (indexOfUser === -1) {
    res.send({ message: "User not found to modify" });
  }
  //if user existed,update existing user with modified user
  else {
    users.splice(indexOfUser, 1, modifiedUser);
    //send res
    res.send({ message: "User modified" });
  }
};


//delete user my email
const deleteUserByEmail = (req, res) => {
  res.send({ message: "User deleted" });
};

//export all user conreollers
module.exports = {
  getAllUsers,
  getUserByEmail,
  createNewUser,
  modifyUser,
  deleteUserByEmail,
};
