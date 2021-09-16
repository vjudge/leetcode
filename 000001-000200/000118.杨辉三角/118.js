/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 方法一：用时 60ms
// 执行用时超过了 96%
// 消耗内存超过了 88%
var generate = function(numRows) {
  if (numRows === 0) {
    return []
  }
  let result = [[1]]
  for (let i = 1; i < numRows; i++) {
    let tmp = [1]
    let j = 1
    while (j < i) {
      tmp.push(result[i-1][j-1] + result[i-1][j])
      j ++
    }
    tmp.push(1)
    result.push(tmp)
  }
  return result
};

console.log(generate(1))
console.log(generate(5))
