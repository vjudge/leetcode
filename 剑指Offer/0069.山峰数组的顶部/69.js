/**
 * @param {number[]} arr
 * @return {number}
 */

//方法一: 用时 68 ms
// 执行用时超过了 77 %
// 消耗内存超过了 69 %
// 难度: 简单
var peakIndexInMountainArray = function(arr) {
  let i = 1
  while (i < arr.length) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      break
    }
    i ++
  }
  return i
};

console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))
console.log(peakIndexInMountainArray([3, 4, 5, 1]))
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]))
