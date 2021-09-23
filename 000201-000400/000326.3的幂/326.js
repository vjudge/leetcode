/**
 * @param {number} n
 * @return {boolean}
 */
// // 方法一: 用时 216ms
// // 执行用时超过了 59%
// // 消耗内存超过了 67%
// var isPowerOfThree = function(n) {
//   while (n != 0 && n % 3 === 0) {
//     n = Math.floor(n / 3)
//   }
//   return n === 1
// };

// 方法二: 用时 204ms
// 执行用时超过了 76%
// 消耗内存超过了 64%
var isPowerOfThree = function(n) {
  if (n === 0) {
    return false
  }
  if (n === 1) {
    return true
  }
  let ps = 3
  while (ps < n) {
    if (ps * ps <= n) {
      ps = ps * ps
    } else {
      ps = ps * 3
    }
  }
  return ps === n
};

// // 方法三: 用时 212ms
// // 执行用时超过了 65%
// // 消耗内存超过了 94%
// var isPowerOfThree = function(n) {
//   return n > 0 && 1162261467 % n === 0
// };

console.log(isPowerOfThree(9))
console.log(isPowerOfThree(10))
console.log(isPowerOfThree(1))
