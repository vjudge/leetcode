/**
 * @param {number} n
 * @return {number}
 */
// 方法一：用时 92 ms
// 执行用时超过了 11 %
// 消耗内存超过了 97 %
// 难度: 中等
var sumNums = function(n) {
    return (1 + n) * n / 2
};

// 方法二：用时 64ms
// 执行用时超过了 92%
// 消耗内存超过了 85%
// 难度: 中等
var sumNums = function(n) {
    return (1 + n) * n >> 1
};


console.log(sumNums(10))
