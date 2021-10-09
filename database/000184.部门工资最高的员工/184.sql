# Write your MySQL query statement below
# 方法一: 745ms
# 执行用时超过了 29.61%
# 消耗内存超过了 100%
# 难度: 简单
SELECT d.Name Department, e.Name Employee, Salary
FROM
Employee e
LEFT JOIN Department d ON e.DepartmentId = d.Id
WHERE
(e.DepartmentId , Salary) IN
(
SELECT DepartmentId, MAX(Salary)
FROM Employee
GROUP BY DepartmentId
)


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
    (2, "Jim", 80000, 2),
    (3, "Henry", 60000, 2),
    (4, "Sam", 90000, 1),
    (5, "Max", 69000, 2),
    (6, "Jack", 85000, 1),
    (7, "Roy", 70000, 2);
