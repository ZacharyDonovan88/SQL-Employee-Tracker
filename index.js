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