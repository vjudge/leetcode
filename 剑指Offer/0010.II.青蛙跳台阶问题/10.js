/**
 * @param {number} n
 * @return {number}
 */
 // 方法一: 用时 64 ms
 // 执行用时超过了 85 %
 // 消耗内存超过了 92 %
var numWays = function(n) {
  if (n < 2) {
    return 1
  }
  let n1 = 1
  let n2 = 1
  let ret = 2
  for (let i = 2; i <= n; i++) {
    ret = (n1 + n2) % 1000000007
    n2 = n1
    n1 = ret
  }
  return ret
};

console.log(numWays(2))
console.log(numWays(7))
console.log(numWays(0))
