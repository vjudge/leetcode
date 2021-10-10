/**
 * @param {number[]} prices
 * @return {number}
 */

 // 方法一：用时 68ms
 // 执行用时超过了 88%
 // 消耗内存超过了 18%
 // 难度: 中等
var maxProfit = function(prices) {
  let dp0 = new Array(prices.length).fill(0)
  let dp1 = new Array(prices.length).fill(0)
  dp0[0] = 0
  dp1[0] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp0[i] = Math.max(dp0[i - 1], dp1[i - 1] + prices[i])
    dp1[i] = Math.max(dp1[i - 1], dp0[i - 1] - prices[i])
  }
  // console.log('dp0:', JSON.stringify(dp0))
  // console.log('dp1:', JSON.stringify(dp1))
  return dp0[prices.length - 1]
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
