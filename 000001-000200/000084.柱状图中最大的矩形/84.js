/**
 * @param {number[]} heights
 * @return {number}
 */
// 方法一：用时 104ms
// 执行用时超过了 71%
// 消耗内存超过了 68%
// 难度: 困难
var largestRectangleArea = function (heights) {
  // 添加哨兵
  heights.unshift(0)
  heights.push(0)
  let monostacks = [0]
  let result = 0
  // console.log(JSON.stringify(heights))
  for (let i = 1; i < heights.length; i++) {
    while (monostacks.length && heights[monostacks[monostacks.length - 1]] > heights[i]) {
      let top = monostacks.pop()
      let left = monostacks[monostacks.length - 1]
      let w = i - left - 1
      result = Math.max(result, heights[top] * w)
      // console.log(`[${i}, ${heights[i]}] ${JSON.stringify(monostacks)} ${left} [${heights[top]} * ${w}]`)
    }
    monostacks.push(i)
  }
  return result
};

console.log(largestRectangleArea([1, 1]))
console.log(largestRectangleArea([5, 4, 3, 2, 1]))
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
