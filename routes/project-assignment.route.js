const exp=require("express");
const projectAssignmentApp=exp.Router();
const {getEmpsOfProjectId,getProjectsByEmpId,getEmpsOnBench}=require("../controllers/project-assignment.controller")


projectAssignmentApp.get('/projectId/:project_id',getEmpsOfProjectId)
projectAssignmentApp.get('/empId/:emp_id',getProjectsByEmpId)
projectAssignmentApp.get('/emps-on-bench',getEmpsOnBench)



module.exports=projectAssignmentApp;