/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 超过：80.76%
var merge = function(nums1, m, nums2, n) {
    let size = m + n - 1
    while (n > 0) {
        // console.log(`init: `, {size, nums1: nums1[m - 1], nums2: nums2[n - 1]}, nums1, m, nums2, n)
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[size] = nums1[m - 1]
            m --
            size --
        } else if (m - 1 < 0 || nums1[m - 1] < nums2[n - 1]) {
            nums1[size] = nums2[n - 1]
            n --
            size --
        } else {
            nums1[size] = nums1[m - 1]
            m --
            size --
            nums1[size] = nums2[n - 1]
            n --
            size --
        }
        // console.log(`mid: `, {size, nums1: nums1[m - 1], nums2: nums2[n - 1]}, nums1, m, nums2, n)
    }
    return nums1
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// console.log(merge([1, 2, 3, 4, 6, 7], 6, [2, 5, 6], 3))
console.log(merge([4, 6, 8, 10, 13, 13], 6, [1, 2, 4, 7], 4))
