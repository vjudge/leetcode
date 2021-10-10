/**
 * @param {string} digits
 * @return {string[]}
 */
// 方法一：用时 64ms
// 执行用时超过了 85%
// 消耗内存超过了 83%
// 难度: 中等
var letterCombinations = function (digits) {
  if (!digits.length) {
    return []
  }
  let letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let ret = []
  for (let i = 0; i < digits.length; i++) {
    let index = digits[i]
    if (!ret.length) {
      ret = letters[index].split('')
      continue
    }
    let tmp = []
    for (let k = 0; k < ret.length; k++) {
      for (let j = 0; j < letters[index].length; j++) {
        tmp.push(ret[k] + letters[index][j])
      }
    }
    ret = tmp
  }
  return ret
};

console.log(letterCombinations('23'))
// console.log(letterCombinations('2'))
// console.log(letterCombinations(''))
