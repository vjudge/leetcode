/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：用时 72 ms
// 执行用时超过了 78 %
// 消耗内存超过了 29 %
// 难度: 简单
var pivotIndex = function(nums) {
    let sum = 0
    for (const num of nums) {
        sum += num
    }
    let midsum = 0
    for (let i = 0; i < nums.length; i++) {
        if (2 * midsum + nums[i] == sum) {
            return i
        }
        midsum += nums[i]
    }
    return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
console.log(pivotIndex([2, 3, -1, 8, 4]))
console.log(pivotIndex([1, -1, 4]))
console.log(pivotIndex([2, 5]))
console.log(pivotIndex([1]))
