/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 方法一：用时 120ms
// 执行用时超过了 100%
// 消耗内存超过了 71%
var threeSum = function(nums) {
  if (nums.length < 3) { return [] }
  nums = nums.sort((a, b) => (a - b))
  let result = []
  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    if (nums[i] > 0) { break }
    if (i > 0 && nums[i] === nums[i - 1]) { continue }
    let subsum = 0 - nums[i]
    let left = i + 1
    let right = nums.length - 1
    // console.log(`i=${i} nums[i]=${nums[i]} subsum=${subsum}`)
    while (left < right) {
      // console.log(`left=${left} right=${right} nums[left+right]=${nums[left]+nums[right]} subsum=${subsum} `, nums[left]+nums[right]==subsum)
      if (nums[left] + nums[right] == subsum) {
        result.push([nums[i], nums[left], nums[right]])
        left ++
        right --
        while (nums[left] === nums[left - 1]) {
          left ++
        }
        while (nums[right] === nums[right + 1]) {
          right --
        }
      } else if (nums[left] + nums[right] > subsum) {
        right --
      } else {
        left ++
      }
    }
  }
  return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([]))
// console.log(threeSum([0]))
