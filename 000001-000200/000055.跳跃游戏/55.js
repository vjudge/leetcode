/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // 方法一: 用时 76ms
 // 执行用时超过了 92%
 // 消耗内存超过了 92%
var canJump = function(nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (i <= max) {
      max = Math.max(max, nums[i] + i)
    }
    if (max >= nums.length - 1) {
      return true
    }
  }
  return false
};

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
