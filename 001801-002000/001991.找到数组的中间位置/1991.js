/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：用时 72 ms
// 执行用时超过了 78 %
// 消耗内存超过了 29 %
// 难度: 简单
// 同: https://leetcode-cn.com/problems/find-pivot-index
// 同: https://github.com/vjudge/leetcode/tree/master/000601-000800/000724.寻找数组的中心下标
var findMiddleIndex = function(nums) {
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

console.log(findMiddleIndex([1, 7, 3, 6, 5, 6]))
console.log(findMiddleIndex([1, 2, 3]))
console.log(findMiddleIndex([2, 1, -1]))
console.log(findMiddleIndex([2, 3, -1, 8, 4]))
console.log(findMiddleIndex([1, -1, 4]))
console.log(findMiddleIndex([2, 5]))
console.log(findMiddleIndex([1]))
