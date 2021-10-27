/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：用时 80 ms
// 执行用时超过了 80 %
// 消耗内存超过了 71 %
// 难度: 简单
var findRepeatNumber = function(nums) {
  let nmaps = {}
  for (let i = 0; i < nums.length; i++) {
    if (!nmaps[nums[i]]) {
      nmaps[nums[i]] = 1
    } else {
      return nums[i]
    }
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
