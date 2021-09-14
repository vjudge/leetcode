/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：用时 76ms
// 执行用时超过了 79%
// 消耗内存超过了 75%
var singleNumber = function(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    return result
};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([6, 6, 3, 3, 2, 2, 0]))
