/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
// 方法一：用时 92ms
// 执行用时超过了 100%
// 消耗内存超过了 20%
var decode = function(encoded, first) {
  let size = encoded.length + 1
  let result = new Array(size).fill(0)
  result[0] = first
  for (let i = 1; i < size; i++) {
    result[i] = result[i - 1] ^ encoded[i - 1]
  }
  return result
};
