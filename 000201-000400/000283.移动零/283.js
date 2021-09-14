/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一：用时 64ms
// 执行用时超过了 100%
// 消耗内存超过了 90%
var moveZeroes = function(nums) {
  if (nums.length <= 1) {
    return nums
  }
  let zeroIndex = nums.findIndex((val) => (!val))
  if (zeroIndex === -1) {
    return nums
  }
  let start = zeroIndex + 1
  let end = nums.length
  while (start < end) {
    if (nums[start]) {
      nums[zeroIndex] = nums[start]
      zeroIndex ++
    }
    start ++
  }
  while (zeroIndex < end) {
    nums[zeroIndex] = 0
    zeroIndex ++
  }
  return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([2, 1, 5, 3, 12]))
