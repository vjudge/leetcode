/**
 * @param {number} n
 * @return {number[]}
 */
// // 方法一：用时 92ms
// // 执行用时超过了 80%
// // 消耗内存超过了 37%
// var countBits = function(n) {
//   let result = [0]
//   for (let i = 1; i <= n; i++) {
//     if (i % 2) { // 奇数
//       result.push(result[i - 1] + 1)
//     } else {
//       result.push(result[i >> 1])
//     }
//   }
//   return result
// };


// 方法二：用时 80ms
// 执行用时超过了 99%
// 消耗内存超过了 35%
var countBits = function(n) {
  if (n === 0) {
    return [0]
  }
  if (n === 1) {
    return [0, 1]
  }
  let result = [0]
  for (let i = 1; i <= n; i++) {
    result.push(result[i & (i-1)] + 1)
  }
  return result
};


console.log(countBits(10))
