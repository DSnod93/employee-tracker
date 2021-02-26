// NPM DEPENDENCIES
const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: "password",
    database: 'employee_db'
  });

  connection.connect(function(err) {
      if (err) throw err;
  });