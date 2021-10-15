/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// 方法一：用时 64 ms
// 执行用时超过了 85 %
// 消耗内存超过了 16 %
// 难度: 中等
var minimumSwap = function(s1, s2) {
  if (s1.length != s2.length) {
    return -1
  }
  let xy = 0
  let yx = 0
  for (let i = 0, j = 0; i < s1.length && j < s2.length; i ++, j ++) {
    if (s1[i] == 'x' && s2[j] == 'y') {
      xy ++
    } else if (s1[i] == 'y' && s2[j] == 'x') {
      yx ++
    }
  }
  if ((xy + yx) % 2 == 1) {
    return -1
  }
  let ret = Math.floor(xy / 2) + Math.floor(yx / 2)
  if (xy % 2 == 1) {
    ret += 2
  }
  return ret
};

console.log(minimumSwap('xx', 'yy'))
console.log(minimumSwap('xy', 'yx'))
console.log(minimumSwap('xx', 'xy'))
console.log(minimumSwap('xxyyxyxyxx', 'xyyxyxxxyx'))
