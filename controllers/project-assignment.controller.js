const expressAsyncHandler = require("express-async-handler");
const connection = require("../database/db.config");
const db = connection.promise();

//get employees by project id
const getEmpsOfProjectId = expressAsyncHandler(async (req, res) => {
  const projectId = req.params.project_id;
  let [records] = await db.query(
    "select employees.emp_id,employees.emp_first_name,employees.email,projects.project_id from employees inner join projects on employees.emp_id=projects.emp_id where project_id=?",
    projectId
  );

  if (records.length == 0) {
    res.send({ message: "Incorrect Projet ID" });
  } else {
    res.send({
      message: `empployee working on projectId ${records[0].project_id}`,
      payload: records[0],
    });
  }
});


//get projects by employee id
const getProjectsByEmpId = expressAsyncHandler(async (req, res) => {
  //get empid from url
  //one emp can be assigned to many projects
  const empId = req.params.emp_id;
  let [rows] = await db.query(
    "select employees.emp_id,employees.emp_first_name,projects.project_id  from employees inner join projects on employees.emp_id=projects.emp_id where employees.emp_id=?",
    empId
  );
  res.send({ message: "projects assigned", payload: rows });
});



//get employees not assigned to any projects
const getEmpsOnBench = expressAsyncHandler(async (req, res) => {
  let [rows] = await db.query(
    "select employees.emp_id,employees.emp_first_name,projects.project_id from employees left join projects on employees.emp_id=projects.emp_id"
  );

  let empsOnBench = rows.filter((obj) => obj.project_id == null);

  res.send({ message: "employees on bench", payload: empsOnBench });
});

module.exports = {
  getEmpsOfProjectId,
  getProjectsByEmpId,
  getEmpsOnBench,
};
