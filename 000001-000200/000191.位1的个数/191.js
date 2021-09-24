/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 方法一：用时 72ms
// 执行用时超过了 90%
// 消耗内存超过了 67%
// 难度: 中等
var hammingWeight = function(n) {
  let result = 0
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      result++
    }
  }
  return result
};

// console.log(hammingWeight(00000000000000000000000000001011))
console.log(hammingWeight(11111111111111111111111111111101))
