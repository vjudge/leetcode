# Write your MySQL query statement below

# 方法一: 用时353ms
# 执行用时超过了 68%
# 难度: 简单
select FirstName, LastName, City, State
from Person p
left join Address a
on p.PersonId = a.PersonId
