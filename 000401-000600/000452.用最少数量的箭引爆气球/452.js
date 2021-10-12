/**
 * @param {number[][]} points
 * @return {number}
 */
 // 方法一: 用时 240ms
 // 执行用时超过了 47%
 // 消耗内存超过了 46%
 // 难度: 中等
var findMinArrowShots = function(points) {
  if (!points.length) {
    return 0
  }
  points = points.sort((a, b) => (a[1] - b[1]))
  let ret = 1
  let curLast = points[0][1]
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > curLast) {
      ret ++
      curLast = points[i][1]
    }
  }
  return ret
};
console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))
console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]))
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]))
console.log(findMinArrowShots([[1,2]]))
console.log(findMinArrowShots([[2,3],[2,3]]))
