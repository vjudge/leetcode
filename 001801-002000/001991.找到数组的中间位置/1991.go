package main

import "fmt"

// 方法一：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 79 %
// 难度: 简单
func findMiddleIndex (nums []int) int {
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
	fmt.Println(findMiddleIndex([]int{1, 7, 3, 6, 5, 6}))
	fmt.Println(findMiddleIndex([]int{1, 2, 3}))
	fmt.Println(findMiddleIndex([]int{2, 1, -1}))
	fmt.Println(findMiddleIndex([]int{2, 3, -1, 8, 4}))
	fmt.Println(findMiddleIndex([]int{1, -1, 4}))
	fmt.Println(findMiddleIndex([]int{2, 5}))
	fmt.Println(findMiddleIndex([]int{1}))
}