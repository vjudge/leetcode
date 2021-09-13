/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一：用时 64ms
// 执行用时超过了 94%
// 消耗内存超过了 53%
// var sortColors = function(nums) {
//   if (nums.length <= 1) {
//     return nums
//   }
//   let rsmap = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (!rsmap[nums[i]]) {
//       rsmap[nums[i]] = 0
//     }
//     rsmap[nums[i]] ++
//   }
//   let k = 0
//   for (let i = 0; i < 3; i++) {
//     if (rsmap[i]) {
//       for (let j = 0; j < rsmap[i]; j++) {
//         nums[k] = i
//         k ++
//       }
//     }
//   }
//   return nums
// };

// 方法二：用时 60ms
// 执行用时超过了 98%
// 消耗内存超过了 81%
var sortColors = function(nums) {
  if (nums.length <= 1) {
    return nums
  }
  let start = 0
  let end = nums.length - 1
  for (let i = 0; i <= end && start < end; i++) {
    while (nums[end] === 2) { end -- }
    while (nums[start] === 0) { start ++ }
    if (nums[i] === 2 && i < end) {
      let tmp = nums[end]
      nums[end] = nums[i]
      nums[i] = tmp
      end --
    }
    if (nums[i] === 0 && i > start) {
      let tmp = nums[start]
      nums[start] = nums[i]
      nums[i] = tmp
      start ++
    }
  }
  return nums
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))
console.log(sortColors([2, 0, 1]))
console.log(sortColors([2, 1]))
console.log(sortColors([1]))
console.log(sortColors([0]))
console.log(sortColors([]))
