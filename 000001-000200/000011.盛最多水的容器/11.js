/**
 * @param {number[]} height
 * @return {number}
 */
// 方法一：用时 84ms
// 执行用时超过了 79%
// 消耗内存超过了 77%
// 难度: 中等
var maxArea = function(height) {
  let result = 0
  let start = 0
  let end = height.length - 1
  while ( start < end) {
    let minh = height[start]
    if (height[start] > height[end]) {
      minh = height[end]
      end --
    } else {
      start ++
    }
    let area = (end - start + 1) * minh
    result = Math.max(result, area)
  }
  return result
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
console.log(maxArea([4, 3, 2, 1, 4]))
console.log(maxArea([1, 2, 1]))
