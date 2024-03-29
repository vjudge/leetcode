/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 方法一：用时 72ms
// 执行用时超过了 79%
// 消耗内存超过了 64%
var search = function(nums, target) {
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
    return (left>right) ? -1 : mid
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))
