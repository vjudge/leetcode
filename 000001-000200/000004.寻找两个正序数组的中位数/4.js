/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 方法一：用时 108ms
// 执行用时超过了 91%
// 消耗内存超过了 91%
var findMedianSortedArrays = function(nums1, nums2) {
  let total = nums1.length + nums2.length
  let max = Math.floor(total / 2)
  let min = (total % 2) ? max : (max - 1)
  // console.log(`[${min}, ${max}]`)
  let kk = -1
  let i = 0
  let j = 0
  let midsum = 0
  while(nums1[i] || nums2[j] && (max + min != -2)) {
    if (nums1[i] != undefined && (nums2[j] == undefined || nums1[i] <= nums2[j])) {
      kk ++
      if (kk === min) {
        midsum += nums1[i]
        min = -1
      }
      if (kk === max) {
        midsum += nums1[i]
        max = -1
      }
      i ++
    }
    if (nums2[j] != undefined && (nums1[i] == undefined || nums1[i] > nums2[j])) {
      kk ++
      if (kk === min) {
        midsum += nums2[j]
        min = -1
      }
      if (kk === max) {
        midsum += nums2[j]
        max = -1
      }
      j ++
    }
  }
  return (midsum / 2).toFixed(4)
};

console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]))
console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([0, 0], [0, 0]))
console.log(findMedianSortedArrays([], [1]))
console.log(findMedianSortedArrays([2], []))
