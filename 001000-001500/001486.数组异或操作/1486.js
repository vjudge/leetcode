/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
// 方法一：用时 68ms
// 执行用时超过了 89%
// 消耗内存超过了 81%
var xorOperation = function(n, start) {
  let result = 0
  for (let i = 0; i < n; i++) {
    result ^= start + 2 * i
  }
  return result
};

console.log(xorOperation(5, 0))
console.log(xorOperation(4, 3))
console.log(xorOperation(1, 7))
console.log(xorOperation(10, 5))
