/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 方法一：用时 76ms
// 执行用时超过了 49%
// 消耗内存超过了 60%
var removeElement = function(nums, val) {
  let len = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[len] = nums[i]
      len ++
    }
  }
  return len
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
