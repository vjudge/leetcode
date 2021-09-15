/**
 * @param {number} n
 * @return {number}
 */
// 方法一：用时 100ms
// 执行用时超过了 14%
// 消耗内存超过了 38%
var fib = function(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  let f2 = 0
  let f1 = 1
  let result = 0
  for (let i = 2; i <= n; i++) {
    result = f1 + f2
    f2 = f1
    f1 = result
  }
  return result
};

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
