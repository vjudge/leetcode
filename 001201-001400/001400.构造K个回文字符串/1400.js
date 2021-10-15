/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// 方法一：用时 100 ms
// 执行用时超过了 79 %
// 消耗内存超过了 67 %
// 难度: 中等
var canConstruct = function(s, k) {
  if (k > s.length) {
    return false
  }
  let cnts = {}
  for (let i = 0; i < s.length; i++) {
    if (cnts[s[i]]) {
      cnts[s[i]] ++
    } else {
      cnts[s[i]] = 1
    }
  }
  let jnum = 0
  for(let i in cnts) {
    if (cnts[i] % 2 != 0) {
      jnum ++
    }
  }
  return jnum <= k
};

console.log(canConstruct('annabelle', 2))
console.log(canConstruct('leetcode', 3))
console.log(canConstruct('true', 4))
console.log(canConstruct('yzyzyzyzyzyzyzy', 2))
console.log(canConstruct('cr', 7))
