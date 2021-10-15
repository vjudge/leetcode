/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 // 方法一：用时 76 ms
 // 执行用时超过了 92 %
 // 消耗内存超过了 42 %
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes = boxTypes.sort((a, b) => (b[1] - a[1]))
  let ret = 0
  for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
    let curSize = boxTypes[i][0]
    if (boxTypes[i][0] > truckSize) {
      curSize = truckSize
    }
    ret += curSize * boxTypes[i][1]
    truckSize -= curSize
  }
  return ret
};

console.log(maximumUnits([[1, 3], [2, 2], [3, 1]], 4))
console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10))
