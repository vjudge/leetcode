/**
 * @param {number[]} nums
 * @return {boolean}
 */
// // 方法一: 用时 208ms
// // 执行用时超过了 47%
// // 消耗内存超过了 22%
// // 难度: 中等
// var canPartition = function(nums) {
//   if (nums.length < 2) {
//     return false
//   }
//   let sum = 0
//   nums.forEach(item => (sum += item))
//   if (sum & 1) {
//     return false
//   }
//   let target = Math.floor(sum / 2)
//   // console.log(`target: `, target, JSON.stringify(nums))
//   let dp = new Array(nums.length)
//   for (let i = 0; i < nums.length; i++) {
//     dp[i] = new Array(target + 1).fill(false)
//     dp[i][0] = true
//   }
//   if (nums[0] > target) {
//     return false
//   }
//   dp[0][nums[0]] = true
//   // console.log('dp: ', JSON.stringify(dp))
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 1; j <= target; j++) {
//       if (j >= nums[i]) {
//         dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
//       } else {
//         dp[i][j] = dp[i - 1][j]
//       }
//     }
//   }
//   return dp[nums.length - 1][target]
// };


// 方法二: 用时 104ms
// 执行用时超过了 94%
// 消耗内存超过了 88%
// 难度: 中等
var canPartition = function(nums) {
  if (nums.length < 2) {
    return false
  }
  let sum = 0
  nums.forEach(item => (sum += item))
  if (sum & 1) {
    return false
  }
  let target = Math.floor(sum / 2)
  // console.log(`target: `, target, JSON.stringify(nums))
  if (nums[0] > target) {
    return false
  }
  let dp = new Array(target + 1).fill(false)
  dp[0] = true
  dp[nums[0]] = true
  // console.log('init dp: ', JSON.stringify(dp))
  for (let i = 1; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  // console.log('result dp: ', JSON.stringify(dp))
  return dp[target]
};

console.log(canPartition([2, 2, 1, 1]))
// console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1, 2, 3, 5]))
