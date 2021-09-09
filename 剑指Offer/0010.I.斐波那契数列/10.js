/**
 * @param {number} n
 * @return {number}
 */
// 方法：用时 72ms
// 执行用时超过了 57%
// 消耗内存超过了 18%
var fib = function(n) {
  if (n == 0) { return 0 }
  if (n == 1) { return 1 }
  let n1 = 1
  let n2 = 0
  let num = 1
  for (let i = 2; i <=n ; i ++) {
    num = (n1 + n2) % 1000000007
    n2 = n1
    n1 = num
  }
  return num
}

console.log(fib(2))
console.log(fib(5))
console.log(fib(1))
console.log(fib(45))
