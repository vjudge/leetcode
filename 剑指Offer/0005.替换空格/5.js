/**
 * @param {string} s
 * @return {string}
 */
// 方法一：用时 64 ms
// 执行用时超过了 89 %
// 消耗内存超过了 87 %
// 难度: 简单
var replaceSpace = function(s) {
  let str = s.split(' ')
  return str.join('%20')
};

console.log(replaceSpace('We are happy.'))
