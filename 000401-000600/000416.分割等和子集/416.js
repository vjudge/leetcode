/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length < 2) {
    return false
  }
  let sum = 0
  nums.forEach(item => (sum += item))
  console.log('sum: ', sum)
  if (sum % 2) {
    return false
  }
  let target = sum / 2
  let dp = new Array(nums.length).fill(new Array(target + 1))
  if (nums[0] <= target) {
    dp[0][nums[0]] = true
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j]
      if (nums[i] == j) {
        dp[i][j] = true
        continue
      }
      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
      }
    }
    if (dp[i][target]) {
      return true
    }
  }
  return dp[nums.length - 1][target]
};

console.log(canPartition([1, 5, 11, 5]))
console.log(canPartition([1, 2, 3, 5]))
