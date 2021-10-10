/**
 * @param {number} n
 * @return {number}
 */

 // 方法二: 用时 88ms
 // 执行用时超过了 87%
 // 消耗内存超过了 18%
var arrangeCoins = function(n) {
  let left = 1
  let right = n
  while (left < right) {
    let mid = Math.floor((right - left + 1) / 2) + left
    if (mid * (mid + 1) <= 2 * n) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
};

console.log(arrangeCoins(5))
console.log(arrangeCoins(8))
