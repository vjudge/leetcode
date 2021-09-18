# [000184.部门工资最高的员工](https://github.com/vjudge/leetcode/tree/master/database/000184.部门工资最高的员工)

use leetcode;

CREATE TABLE IF NOT EXISTS Department (
  Id INT PRIMARY KEY AUTO_INCREMENT,
  Name VARCHAR(10)
) COMMENT '部门信息';

create table if not EXISTS Employee (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(10),
    Salary INT,
    DepartmentId INT,
    FOREIGN KEY (DepartmentId) REFERENCES Department(Id)
) COMMENT '员工信息';

INSERT INTO Department VALUES
    (1, "IT"),
    (2, "Sales");

INSERT INTO Employee VALUES
    (1, "Joe", 85000, 1),
    (2, "Joe", 80000, 2),
    (3, "Joe", 60000, 2),
    (4, "Joe", 90000, 1),
    (5, "Joe", 69000, 1),
    (6, "Joe", 85000, 1),
    (7, "Joe", 70000, 1);
