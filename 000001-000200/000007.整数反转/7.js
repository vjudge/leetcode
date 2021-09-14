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


// 方法二：用时 96ms
// 执行用时超过了 42%
// 消耗内存超过了 40%
var reverse = function(x) {
  let numstr = Array.from(String(x))
  let start = 0
  let end = numstr.length - 1
  if (numstr[0] === '-') {
    start = 1
  }
  while (start < end) {
    let tmp = numstr[start]
    numstr[start] = numstr[end]
    numstr[end] = tmp
    start ++
    end --
  }
  let result = parseInt(numstr.join(''))
  if (result >= 2 ** 31 || result <= -((2 ** 31) - 1)) {
    return 0
  }
  return result
};


console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))
