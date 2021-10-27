package main

// 方法一：用时 8 ms
// 执行用时超过了 100 %
// 消耗内存超过了 84 %
// 难度: 中等
// 同: https://leetcode-cn.com/problems/set-matrix-zeroes/submissions
// 同: https://github.com/vjudge/leetcode/tree/master/000001-000200/000073.矩阵置零
func setZeroes(matrix [][]int)  {
	row := make([]bool, len(matrix))
	col := make([]bool, len(matrix[0]))
	for i, item := range matrix {
		for j, v := range item {
			if v == 0 {
				row[i] = true
				col[j] = true
			}
		}
	}
	for i, item := range matrix {
		for j := range item {
			if row[i] || col[j] {
				matrix[i][j] = 0
			}
		}
	}
}

// 方法二：用时 12 ms
// 执行用时超过了 87 %
// 消耗内存超过了 50 %
// 难度: 中等
// 同: https://leetcode-cn.com/problems/set-matrix-zeroes/submissions
// 同: https://github.com/vjudge/leetcode/tree/master/000001-000200/000073.矩阵置零
func setZeroes(matrix [][]int)  {
	rowFlag := false
	for i := 0; i < len(matrix[0]); i++ {
		if matrix[0][i] == 0 {
			rowFlag = true
		}
	}
	colFlag := false
	for i := 0; i < len(matrix); i++ {
		if matrix[i][0] == 0 {
			colFlag = true
		}
	}
	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[0]); j++ {
			if matrix[i][j] == 0 {
				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	}
	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[0]); j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}
	if rowFlag {
		for i := 0; i < len(matrix[0]); i++ {
			matrix[0][i] = 0
		}
	}
	if colFlag {
		for i := 0; i < len(matrix); i++ {
			matrix[i][0] = 0
		}
	}
}
