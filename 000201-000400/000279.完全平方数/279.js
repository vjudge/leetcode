/**
 * @param {number} n
 * @return {number}
 */
// 难度: 中等
var numSquares = function(n) {
    let dp = new Array(n + 1).fill(n+1)
    dp[0] = 0
    // console.log('dp = ', dp)
    for (let i = 1; i <= n; i ++) {
        for(let j = 0; j * j <= i; j ++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }
    console.log('dp = ', dp)
    return dp[n]
};

// console.log(numSquares(1))
// console.log(numSquares(2))
// console.log(numSquares(3))
// console.log(numSquares(4))
// console.log(numSquares(5))
console.log(numSquares(12))
// console.log(numSquares(26))
// console.log(numSquares(18))
