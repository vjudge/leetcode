/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 方法一：用时 96ms
// 执行用时超过了 15%
// 消耗内存超过了 70%
// 难度: 中等
var subsets = function(nums) {
  let result = [[]]
  for (let i = 0; i < nums.length; i++) {
    let end = result.length
    for (let j = 0; j < end; j++) {
      result.push(result[j].concat(nums[i]))
    }
  }
  return result
};




console.log(subsets([1, 2, 3]))
console.log(subsets([1]))
