/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 方法一：用时 60ms
// 执行用时超过了 98%
// 消耗内存超过了 91%
var hammingDistance = function(x, y) {
  let hmdt = x ^ y
  let result = 0
  while (hmdt) {
    if (hmdt % 2) {
      result ++
    }
    hmdt = hmdt >> 1
  }
  return result
};

console.log(hammingDistance(1, 4))
console.log(hammingDistance(3, 1))
