/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 方法一：用时 80ms
// 执行用时超过了 62%
// 消耗内存超过了 59%
var nextGreaterElement = function(nums1, nums2) {
  let monostack = []
  let map = new Map()
  for (let i = 0; i < nums2.length; i++) {
    while(monostack.length && nums2[i] > monostack[monostack.length - 1]) {
      let num = monostack.pop()
      map.set(num, nums2[i])
    }
    monostack.push(nums2[i])
  }
  // console.log('monostack: ', monostack)
  // console.log('map: ', map)
  for (let i = 0; i < monostack.length; i++) {
    map.set(monostack[i], -1)
  }
  let result = []
  for (let i = 0; i < nums1.length; i++) {
    result.push(map.get(nums1[i]))
  }
  return result
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
