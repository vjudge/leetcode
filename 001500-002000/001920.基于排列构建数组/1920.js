/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  let result = []
  for(let key in nums) {
    result.push(nums[nums[key]])
  }
  return result
};

console.log('result: ', buildArray([0, 2, 1, 5, 3, 4]))
console.log('result: ', buildArray([5, 0, 1, 2, 3, 4]))
