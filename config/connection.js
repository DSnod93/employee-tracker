const mysql = require('mysql');
require('dotenv').config();


const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'employee_db'
});

module.exports = connection