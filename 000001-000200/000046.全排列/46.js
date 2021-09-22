/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 方法一：用时 80ms
// 执行用时超过了 92%
// 消耗内存超过了 71%
// 难度: 中等
var permute = function(nums) {
  if (nums.length === 0) {
    return []
  }
  let result = []
  dfs([], {})
  function dfs (path, used) {
    if (path.length == nums.length) {
      result.push(path.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        path.push(nums[i])
        used[i] = true
        dfs(path, used)
        path.pop()
        used[i] = false
      }
    }
  }
  return result
};

console.log(permute([1, 2, 3]))
console.log(permute([0, 1]))
console.log(permute([1]))
