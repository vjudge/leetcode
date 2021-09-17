/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一：用时 100ms
// 执行用时超过了 92%
// 消耗内存超过了 81%
// 难度: 中等
var nextGreaterElements = function(nums) {
  let monostack = []
  let result = new Array(nums.length).fill(-1)
  for (let i = 0; i < nums.length * 2 - 1; i++) {
    let curi = i % nums.length
    while(monostack.length && nums[curi] > nums[monostack[monostack.length - 1]]) {
      result[monostack.pop()] = nums[curi]
    }
    monostack.push(curi)
  }
  return result
};

console.log(nextGreaterElements([5,4,3,2,1]))
console.log(nextGreaterElements([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(nextGreaterElements([30, 40, 50, 60]))
console.log(nextGreaterElements([30, 60, 90]))
console.log(nextGreaterElements([1, 2, 1]))
