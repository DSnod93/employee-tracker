// NPM DEPENDENCIES
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "hackman$1",
    database: 'employee_db'
});

connection.connect(function (err) {
    if (err) throw err;
});

// PROMPT USER WITH QUESTIONS
function questions() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'Add employees', 
            ' Add departments', 
            ' Add roles',
            'View employees', 
            ' View departments', 
            'View roles',
            'Update employee roles'
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View All Employees":
                viewEmployees();
                break;

            case "View all employees by department":
                viewDepartment();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Update Employee Role":
                updateRole();
                break;
        }
    });
}

function viewEmployees() {
    connection.query(query, function(err, res) {
        if(err) throw err;
        console.table(res);
    })
    // add in PROMISE
}

questions();

