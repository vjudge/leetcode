/**
 * @param {number} n
 * @return {number}
 */
// 方法一：用时 68ms
// 执行用时超过了 66%
// 消耗内存超过了 50%
var tribonacci = function(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  }
  let tn3 = 0
  let tn2 = 1
  let tn1 = 1
  let result = 2
  for (let i = 3; i <= n; i++) {
    result = tn1 + tn2 + tn3
    tn3 = tn2
    tn2 = tn1
    tn1 = result
  }
  return result
};

console.log(tribonacci(25))
console.log(tribonacci(4))
