/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 方法一：用时 60 ms
// 执行用时超过了 98 %
// 消耗内存超过了 92 %
// 难度: 中等
// 同: https://leetcode-cn.com/problems/rotate-matrix-lcci
// 同:
var rotate = function(matrix) {
    let length = matrix.length
    // 水平翻转
    for (let i = 0; i < length / 2; i++) {
        let tmp = matrix[i]
        matrix[i] = matrix[length - i - 1]
        matrix[length - i - 1] = tmp
    }
    // 主对角线翻转
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < i; j++ ) {
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))