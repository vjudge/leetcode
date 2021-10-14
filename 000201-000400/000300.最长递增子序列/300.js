/**
 * @param {number[]} nums
 * @return {number}
 */
 //方法一：用时 228ms
 // 执行用时超过了 8%
 // 消耗内存超过了 59%
 // 难度: 中等
var lengthOfLIS = function(nums) {
  if (nums.length < 2) {
    return nums.length
  }
  let dp = new Array(nums.length).fill(1)
  let ret = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    ret = Math.max(ret, dp[i])
  }
  return ret
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
