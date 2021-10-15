/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一：用时 84 ms
// 执行用时超过了 78 %
// 消耗内存超过了 71 %
var smallerNumbersThanCurrent = function(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(0)
        for (let j = 0; j < nums.length; j++) {
            if (i != j && nums[i] > nums[j]) {
                result[i] ++
            }
        }
    }
    return result
};

console.log(`result = `, smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
console.log(`result = `, smallerNumbersThanCurrent([6, 5, 4, 8]))
console.log(`result = `, smallerNumbersThanCurrent([7, 7, 7, 7]))
