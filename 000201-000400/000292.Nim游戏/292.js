/**
 * @param {number} n
 * @return {boolean}
 */
//方法一：用时 88ms
// 执行用时超过了 13%
// 消耗内存超过了 89%
var canWinNim = function(n) {
  return (n % 4 != 0)
};

console.log(canWinNim(4))
console.log(canWinNim(1))
console.log(canWinNim(2))
