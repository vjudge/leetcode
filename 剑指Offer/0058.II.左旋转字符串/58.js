/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 方法一：用时 76 ms
// 执行用时超过了 54 %
// 消耗内存超过了 15 %
// 难度: 简单
var reverseLeftWords = function(s, n) {
  let result = []
  for (let i = n; i < s.length; i ++) {
    result.push(s[i])
  }
  for(let i = 0; i < n; i ++) {
    result.push(s[i])
  }
  return result.join('')
};


// 方法二：用时 92ms
// 执行用时超过了 14%
// 消耗内存超过了 35%
var reverseLeftWords = function(s, n) {
  let str = s.split('')
  return str.splice(n).concat(arr).join('')
};


// 方法三：用时 60ms
// 执行用时超过了 97%
// 消耗内存超过了 93%
var reverseLeftWords = function(s, n) {
  return s.slice(n) + s.slice(0, n)
};

console.log(reverseLeftWords('abcdefg', 2))
console.log(reverseLeftWords('lrloseumgh', 6))
