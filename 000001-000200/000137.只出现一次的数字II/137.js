/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：用时 72ms
// 执行用时超过了 81%
// 消耗内存超过了 26%
// 难度: 中等
var singleNumber = function(nums) {
  let map = { [nums[0]]: 1 }
  for (let i = 1; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] ++
      continue
    }
    map[nums[i]] = 1
  }
  console.log(`map=${JSON.stringify(map)}`)
  let result = Object.keys(map).find((key) => (map[key] === 1))
  return result
};

console.log(singleNumber([2, 2, 3, 2]))
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]))
console.log(singleNumber([30000, 500, 100, 30000, 100, 30000, 100]))
