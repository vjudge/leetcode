/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 方法一：用时 72ms
// 执行用时超过了 62%
// 消耗内存超过了 52%
var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1]
  }
  let result = [1]
  for (let i = 1; i <= rowIndex; i++) {
    let tmp = [1]
    let j = 1
    while (j < i) {
      tmp.push(result[j-1] + result[j])
      j ++
    }
    tmp.push(1)
    result = tmp
  }
  return result
};

console.log(getRow(1))
console.log(getRow(3))
console.log(getRow(5))
