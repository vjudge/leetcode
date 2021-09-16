/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 方法一：用时 96ms
// 执行用时超过了 96%
// 消耗内存超过了 35%
// 难度: 中等
var coinChange = function(coins, amount) {
  if(!amount) {
    return 0
  }

  let dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for(let i =0; i < coins.length; i++) {
    for(let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))
