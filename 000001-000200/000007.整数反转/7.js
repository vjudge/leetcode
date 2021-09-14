/**
 * @param {number} x
 * @return {number}
 */
// // 方法一：用时 88ms
// // 执行用时超过了 64%
// // 消耗内存超过了 69%
// var reverse = function(x) {
//   let result = 0
//   while (x) {
//     result = result * 10 + x % 10
//     x = x / 10 | 0
//   }
//   return (result | 0) === result ? result : 0
// };


// 方法二：用时 88ms
// 执行用时超过了 64%
// 消耗内存超过了 69%
var reverse = function(x) {
  let result = 0
  while (x) {
    result = result * 10 + x % 10
    x = x / 10 | 0
  }
  return (result | 0) === result ? result : 0
};


console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))
