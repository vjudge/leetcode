/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 方法一：用时 60ms
// 执行用时超过了 98%
// 消耗内存超过了 84%
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length
    let mid = 0
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if ( nums[mid] == target ) {
            break
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return (nums[mid] < target) ? (mid + 1) : mid
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1, 3], 2))
