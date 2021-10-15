/**
 * @param {number[]} position
 * @return {number}
 */
 // 方法一：用时 68 ms
 // 执行用时超过了 64 %
 // 消耗内存超过了 76 %
var minCostToMoveChips = function(position) {
  let jnum = 0
  let onum = 0
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2) {
      jnum ++
    } else {
      onum ++
    }
  }
  return Math.min(jnum, onum)
};

console.log(minCostToMoveChips([1, 2, 3]))
console.log(minCostToMoveChips([2, 2, 2, 3, 3]))
