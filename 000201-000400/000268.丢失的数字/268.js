/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：用时 80ms
// 执行用时超过了 70%
// 消耗内存超过了 67%
var missingNumber = function(nums) {
  let size = nums.length
  let result = 0
  result ^= size
  for (let i = 0; i < size; i++) {
    result ^= i ^ nums[i]
  }

  return result
};

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(missingNumber([0]))
console.log(missingNumber([2, 0]))
