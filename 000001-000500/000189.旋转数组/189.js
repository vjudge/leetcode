/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一：用时 100ms
// 执行用时超过了 89%
// 消耗内存超过了 56%
var rotate = function(nums, k) {
  k = k % nums.length
  let rotlst = nums.splice(0, nums.length - k)
  rotlst.map((val) => (nums.push(val)))
  return nums
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1, -10, 3, 99], 2))
console.log(rotate([1], 1))
console.log(rotate([1, 2], 3))
