/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 方法一：用时 72ms
// 执行用时超过了 96%
// 消耗内存超过了 75%
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals
  }
  intervals.sort( (a, b) => a[0] - b[0] )
  let result = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0]) {
      if (result[result.length - 1][1] < intervals[i][1]) {
        result[result.length - 1][1] = intervals[i][1]
      }
      if (result[result.length - 1][0] > intervals[i][0]) {
        result[result.length - 1][0] = intervals[i][0]
      }
    } else {
      result.push(intervals[i])
    }
  }
  return result
};

// console.log(merge([[1, 3],[2, 6],[8, 10],[15, 18]]))
// console.log(merge([[1, 4], [4, 5]]))
// console.log(merge([[1, 4], [0, 4]]))
console.log(merge([[1, 4], [0, 1]]))
console.log(merge([[1, 4], [0, 0]]))
