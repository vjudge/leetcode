/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  let result = [...nums]
  for(let num of nums) {
    console.log(num)
    result.push(num)
  }
  return result
};

console.log('nums: ', getConcatenation([1, 2, 1]))
console.log('nums: ', getConcatenation([1,3,2,1]))
console.log('nums: ', getConcatenation([]))
