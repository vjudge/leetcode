# Write your MySQL query statement below

# 方法一: 用时 205ms
# 执行用时超过了 63%
# 难度: 简单
select
  (select distinct salary
    from Employee
    order by Salary Desc
    limit 1, 1
  )  AS SecondHighestSalary;


# 方法二: 用时 201ms
# 执行用时超过了 74%
# 难度: 简单
select
  (select DISTINCT Salary
    from Employee
    order by Salary Desc
    limit 1 offset 1
  ) AS SecondHighestSalary;
