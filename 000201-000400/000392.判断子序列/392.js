/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 //方法一: 用时 64 ms
 // 执行用时超过了 94 %
 // 消耗内存超过了 78 %
var isSubsequence = function(s, t) {
  let i = 0
  let j = 0
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i ++
    }
    j ++
  }
  return i == s.length
};

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))
