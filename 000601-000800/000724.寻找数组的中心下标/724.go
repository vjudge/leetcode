package main

import "fmt"

// 方法一：用时 20 ms
// 执行用时超过了 71 %
// 消耗内存超过了 67 %
// 难度: 简单
// 同: https://leetcode-cn.com/problems/find-the-middle-index-in-array
// 同: https://github.com/vjudge/leetcode/tree/master/001801-002000/001991.找到数组的中间位置
func pivotIndex(nums []int) int {
	sum := 0
	for _, num := range nums {
		sum += num
	}
	midsum := 0
	for i, num := range nums {
		if 2 * midsum + num == sum {
			return i
		}
		midsum += num
	}
	return -1
}

func main ()  {
	fmt.Println(pivotIndex([]int{1, 7, 3, 6, 5, 6}))
	fmt.Println(pivotIndex([]int{1, 2, 3}))
	fmt.Println(pivotIndex([]int{2, 1, -1}))
	fmt.Println(pivotIndex([]int{2, 3, -1, 8, 4}))
	fmt.Println(pivotIndex([]int{1, -1, 4}))
	fmt.Println(pivotIndex([]int{2, 5}))
	fmt.Println(pivotIndex([]int{1}))
}