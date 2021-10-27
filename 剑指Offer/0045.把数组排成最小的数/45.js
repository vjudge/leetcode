/**
 * @param {number[]} nums
 * @return {string}
 */
// 方法一：用时 76 ms
// 执行用时超过了 54 %
// 消耗内存超过了 15 %
// 难度: 中等
var minNumber = function(nums) {
    return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('')
};

console.log(minNumber([3, 30, 34, 5, 9]))
console.log(minNumber([10, 2]))