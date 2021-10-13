/**
 * @param {number} n
 * @return {string[]}
 */

 // 方法一：用时 68ms
 // 执行用时超过了 95%
 // 消耗内存超过了 13%
var fizzBuzz = function(n) {
  let ret = []
  for (var i = 1; i <= n; i++) {
    if (i % 3 && i % 5) {
      ret.push(i.toString())
    } else if (!(i % 3) && i % 5) {
      ret.push('Fizz')
    } else if (i % 3 && !(i % 5)) {
      ret.push('Buzz')
    } else {
      ret.push('FizzBuzz')
    }
  }
  return ret
};

console.log(fizzBuzz(15))
