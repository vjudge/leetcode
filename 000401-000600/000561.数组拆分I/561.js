/**
 * @param {number[]} nums
 * @return {number}
 */
 // 方法一：用时 104 ms
 // 执行用时超过了 97 %
 // 消耗内存超过了 71 %
var arrayPairSum = function(nums) {
  nums = nums.sort((a, b) => (a - b))
  let ret = 0
  for (let i = 0; i < nums.length; i+=2) {
    ret += nums[i]
  }
  return ret
};

console.log(arrayPairSum([1, 4, 2, 3]))
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))
