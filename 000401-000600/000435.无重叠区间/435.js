/**
 * @param {number[][]} intervals
 * @return {number}
 */

 // 方法一: 用时 232ms
 // 执行用时超过了 73%
 // 消耗内存超过了 47%
 // 难度: 中等
var eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) {
    return 0
  }
  intervals = intervals.sort((a, b) => (a[1] - b[1]))
  let ret = 1
  let curLast = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= curLast) {
      ret ++
      curLast = intervals[i][1];
    }
  }
  return intervals.length - ret
};

console.log(eraseOverlapIntervals([ [3,4], [2,3], [1,2], [1,3] ]))
console.log(eraseOverlapIntervals([ [1,2], [1,3], [1,2] ]))
console.log(eraseOverlapIntervals([ [1,2], [2,3] ]))
