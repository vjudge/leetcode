/**
 * @param {string} s
 * @return {boolean}
 */
// 方法一：用时 76ms
// 执行用时超过了 59%
// 消耗内存超过了 99%
var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false
  }
  let stack = []
  let lefts = ['(', '{', '[']
  let brackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let i = 0
  while (i < s.length) {
    if (lefts.includes(s[i])) { // 左边括号
      stack.push(s[i])
      i++
      continue
    }
    let top = stack.pop()
    if (brackets[s[i]] != top) {
      break
    }
    i ++
  }
  return (i == s.length && !stack.length)
};

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]('))
console.log(isValid('([])'))
