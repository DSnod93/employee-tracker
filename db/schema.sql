DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(dept_id)
);

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL() NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    emp_id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NULL,
    PRIMARY KEY(id)
);