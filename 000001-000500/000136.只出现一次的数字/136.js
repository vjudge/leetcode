/**
 * @param {number[]} nums
 * @return {number}
 */
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