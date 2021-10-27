package main

// 方法一：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 66 %
// 难度: 中等
// 同: https://leetcode-cn.com/problems/rotate-image
// 同: https://github.com/vjudge/leetcode/tree/master/000001-000200/000048.旋转图像
func rotate(matrix [][]int)  {
	length := len(matrix)
	// 水平翻转
	for i := 0; i < length / 2; i++ {
		matrix[i], matrix[length - i - 1] = matrix[length - i - 1], matrix[i]
	}
	// 主对角线翻转
	for i := 0; i < length; i++ {
		for j := 0; j < i; j++ {
			matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		}
	}
}

func main ()  {
	
}
