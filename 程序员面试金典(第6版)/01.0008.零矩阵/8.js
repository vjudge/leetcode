/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 方法一：用时 84 ms
// 执行用时超过了 89 %
// 消耗内存超过了 85 %
// 难度: 中等
// 同: https://leetcode-cn.com/problems/set-matrix-zeroes/submissions
// 同: https://github.com/vjudge/leetcode/tree/master/000001-000200/000073.矩阵置零
var setZeroes = function(matrix) {
    let row = new Array(matrix.length).fill(false)
    let col = new Array(matrix[0].length).fill(false)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                row[i] = true
                col[j] = true
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0
            }
        }
    }
};

// 方法二：用时 88 ms
// 执行用时超过了 77 %
// 消耗内存超过了 78 %
// 难度: 中等
// 同: https://leetcode-cn.com/problems/set-matrix-zeroes/submissions
// 同: https://github.com/vjudge/leetcode/tree/master/000001-000200/000073.矩阵置零
var setZeroes = function(matrix) {
    let rowFlag = false
    for (let i = 0; i < matrix[0].length; i++) {
        if (!matrix[0][i]) {
            rowFlag = true
        }
    }
    let colFlag = false
    for (let i = 0; i < matrix.length; i++) {
        if (!matrix[i][0]) {
            colFlag = true
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (!matrix[i][0] || !matrix[0][j]) {
                matrix[i][j] = 0
            }
        }
    }
    if (rowFlag) {
        for (let i = 0; i < matrix[0].length; i ++) {
            matrix[0][i] = 0
        }
    }
    if (colFlag) {
        for (let i = 0; i < matrix.length; i ++) {
            matrix[i][0] = 0
        }
    }
};