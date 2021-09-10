/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 // 方法一：用时 80ms
 // 执行用时超过了 62%
 // 消耗内存超过了 7%
var numJewelsInStones = function(jewels, stones) {
  let jewMaps = {}
  for(let jewel of jewels) {
    jewMaps[jewel] = true
  }
  let cnt = 0
  for(let stone of stones) {
    if (jewMaps[stone]) {
      cnt ++
    }
  }
  return cnt
};


// 方法二：用时 68ms
// 执行用时超过了 92%
// 消耗内存超过了 53%
var numJewelsInStones = function(jewels, stones) {
  const jewSet = new Set()
  jewels.split('').forEach(c => jewSet.add(c))
  return stones.split('').filter(c => jewSet.has(c)).length
};



console.log(numJewelsInStones('aA', 'aAAbbbb'))
console.log(numJewelsInStones('z', 'ZZ'))
