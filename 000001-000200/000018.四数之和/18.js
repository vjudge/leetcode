/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 方法一：用时 80ms
// 执行用时超过了 96%
// 消耗内存超过了 55%
var fourSum = function(nums, target) {
  let result = []
  if (nums.length < 4) {
    return result
  }
  nums.sort((x, y) => x - y)
  let size = nums.length
  for (let i = 0; i < size - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break
    }
    if (nums[i] + nums[size - 1] + nums[size - 2] + nums[size - 3] < target) {
      continue
    }
    for (let j = i + 1; j < size - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break
      }
      if (nums[i] + nums[j] + nums[size - 1] + nums[size - 2] < target) {
        continue
      }
      let start = j + 1
      let end = size - 1
      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end]
        if (sum === target) {
          result.push([nums[i], nums[j], nums[start], nums[end]])
          while (nums[start+1] == nums[start] && start < end) {
            start ++
          }
          start ++
          while(nums[end-1] == nums[end] && start < end) {
            end --
          }
          end --
        } else if (sum < target) {
          start ++
        } else {
          end --
        }
      }
    }
  }
  return result
};

console.log(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], -9))
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([2, 2, 2, 2, 2], 8))
