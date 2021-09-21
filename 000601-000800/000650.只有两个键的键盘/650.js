/**
 * @param {number} n
 * @return {number}
 */
// 方法一：用时 68ms
// 执行用时超过了 91%
// 消耗内存超过了 21%
var minSteps = function(n) {
  let ms = new Array(n + 1).fill(0)
  for (let i = 2; i <= n; i++) {
    ms[i] = Number.MAX_SAFE_INTEGER
    for (let j = 1; j * j  <= i; j++) {
      if (i % j === 0) {
        ms[i] = Math.min(ms[i], Math.floor(ms[i / j] + j))
        ms[i] = Math.min(ms[i], Math.floor(ms[j] + i / j))
        console.log(`[${i}, ${j}]`, ms[i], ms[i / j] + j, ms[j] + i / j)
      }
    }
  }
  return ms[n]
};

console.log(minSteps(3))
console.log(minSteps(4))
