/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一: 用时 64 ms
// 执行用时超过了 98 %
// 消耗内存超过了 79 %
// 难度: 简单
var majorityElement = function(nums) {
    let mergeNums = {}
    nums.forEach(num => {
        if (!mergeNums[num]) {
            mergeNums[num] = 1
        } else {
            mergeNums[num] += 1
        }
    })
    let result = nums[0]
    for(let key in mergeNums) {
        if (mergeNums[result] < mergeNums[key]) {
            result = key
        }
    }
    return result
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
