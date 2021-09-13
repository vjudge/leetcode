/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let rotlst = nums.splice(0, nums.length - k)
  nums = nums.concat(rotlst)
  return nums
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate([-1, -10, 3, 99], 2))
console.log(rotate([1], 1))
