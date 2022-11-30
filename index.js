var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");
var figlet = require('figlet');

figlet('EMPLOYEE TRACKER!!', function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
}
console.log(data)
});

var connection = mysql.createConnection({
  host: "localhost",

  port: 3001,

  user: "root",

  password: "",
  database: "employeeDb"
});

connection.connect(function(err) {
    if (err) throw err;
    startApp();
  });

  function startApp() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View departments",
          "View roles",
          "Add department",
          "Add role",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "EXIT"
        ]
      })
  .then(function(answer) {
      switch (answer.action) {
      case "View All Employees":
        viewEmployees();
        break;
  
      case "View All Employees By Department":
        viewEmployeesByDept();
        break;
  
      case "View departments":
        viewDept();
        break;
      
      case "View roles":
        viewRoles();
        break;
  
      case "Add Employee":
        addEmployee();
        break;
    
      case "Add department":
        addDept();
        break;
      
      case "Add role":
        addRole();
        break;
  
      case "Remove Employee":
        removeEmployee();
        break;
      
      case "Update Employee Role":
        updateEmployeeRole();
        break;
      
      case "Update Employee Manager":
        updateEmployeeMng();
        break;
      
      case "EXIT":
        console.log("Thanks for using Employee Tracker! Have a nice day!")
        process.exit();
      }
    });
  }