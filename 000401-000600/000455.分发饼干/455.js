/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 方法一：用时 92ms
// 执行用时超过了 91%
// 消耗内存超过了 52%
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => (a - b))
  s = s.sort((a, b) => (a - b))
  let j = 0
  let ret = 0
  for (let i = 0, j = 0; i < g.length && j < s.length; i++, j ++) {
    while (j < s.length && g[i] > s[j]) {
      j ++
    }
    if (j < s.length) {
      ret ++
    }
  }
  return ret
};

console.log(findContentChildren([1, 2, 3], [3]))
console.log(findContentChildren([3, 2, 1], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]))
console.log(findContentChildren([10, 9, 8, 7], [10, 9, 8, 7]))
