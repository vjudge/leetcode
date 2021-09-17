/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：用时 72ms
// 执行用时超过了 91%
// 消耗内存超过了 84%
var subsetXORSum = function(nums) {
  let result = 0
  for (let i = 0; i < nums.length; i ++) {
    result |= nums[i]
  }
  return result << (nums.length - 1)
};
