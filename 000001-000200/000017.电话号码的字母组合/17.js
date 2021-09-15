/**
 * @param {string} digits
 * @return {string[]}
 */
// 方法一：用时 164ms
// 执行用时超过了 87%
// 消耗内存超过了 98%
var letterCombinations = function (digits) {
  let letters =['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']





  var dfs = function (s, k, prestr) {
    if (k == 1) {
      return map[s].split('')
    }
  }
};



console.log(letterCombinations('23'))
console.log(letterCombinations('2'))
console.log(letterCombinations(''))
