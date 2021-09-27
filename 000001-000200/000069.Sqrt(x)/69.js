/**
 * @param {number} x
 * @return {number}
 */
 // 方法一: 用时 80ms
 // 执行用时超过了 86%
 // 消耗内存超过了 21%
var mySqrt = function(x) {
  if (x < 2) {
    return x
  }
  let left = 1
  let right = Math.floor(x / 2)
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (mid * mid === x) {
      return mid
    }
    if (mid * mid < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
};

// 方法二: 用时 80ms
// 执行用时超过了 86%
// 消耗内存超过了 21%
var mySqrt = function (x) {

}

console.log(mySqrt(6))
console.log(mySqrt(10))
console.log(mySqrt(16))
