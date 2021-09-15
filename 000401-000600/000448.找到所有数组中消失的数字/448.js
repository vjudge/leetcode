/**
 * @param {number[]} nums
 * @return {number[]}
 */
// // 方法一：用时 100ms
// // 执行用时超过了 95%
// // 消耗内存超过了 55%
// var findDisappearedNumbers = function(nums) {
//   let flags = new Array(nums.length)
//   for (let i = 0; i < nums.length; i++) {
//     flags[nums[i] - 1] = true
//   }
//   let result = []
//   for (let i = 0; i < flags.length; i++) {
//     if (!flags[i]) {
//       result.push(i + 1)
//     }
//   }
//   return result
// };

// 方法二：用时 89ms
// 执行用时超过了 100%
// 消耗内存超过了 84%
var findDisappearedNumbers = function(nums) {
  let size = nums.length
  for (let i = 0; i < size; i++) {
    let curi = (nums[i] - 1) % size
    nums[curi] += size
  }
  let result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums.length) {
      result.push(i + 1)
    }
  }
  return result
};

// 方法三：用时 84ms
// 执行用时超过了 100%
// 消耗内存超过了 96%
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[(nums[i] - 1) % nums.length] += nums.length
  }
  let result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums.length) {
      result.push(i + 1)
    }
  }
  return result
};


console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
// console.log(findDisappearedNumbers([1, 1]))
