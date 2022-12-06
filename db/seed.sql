USE employeeTrackerDb;
INSERT INTO departments (name) VALUES 
("Finance"),
("Marketing"),
("Operations"),
("Engineering"),
("Human-ressouces");
INSERT INTO role (title, salary, department_id) VALUES 
("Accountant Manager", 110000, 1),
("Financial Associate", 72000, 1),
("Sales Manager", 96700, 2),
("Sales Associate", 53600, 2),
("Operations Manager", 79900, 3),
("Operations Associate", 52000, 3),
("Chef Engineer", 120000, 4),
("Engineer", 98000, 4),
("HR Manager", 81000, 5),
("HR Associate", 62000, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id, department_id) VALUES
("Larry", "Coolins", 7, NULL, 4),
("Jay", "King", 5, NULL, 3),
("Sophie", "Mill", 8, 1, 4),
("Lucas", "K.", 1, NULL, 1),
("Emma", "Smith", 3, NULL, 2),
("Will", "Walkins", 6, 2, 3),
("Steve", "Jackson", 2, 4, 1),
("Marcus", "Gin", 4, 5, 2),
("Esther", "Frementon", 9, NULL, 5),
("Jo", "Pablo", 10, 9, 5);