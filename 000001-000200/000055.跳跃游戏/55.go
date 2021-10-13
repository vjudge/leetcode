package main

import "fmt"

// 方法一: 用时 56ms
// 执行用时超过了 82%
// 消耗内存超过了 64%
// 难度: 中等
func canJump(nums []int) bool {
	ret := 0
	for i := 0; i < len(nums); i++ {
		if i <= ret {
			ret = maxInt(ret, nums[i] + i)
		}
		if ret >= len(nums) - 1 {
			return true
		}
	}
	return false
}

func maxInt (x, y int) int {
	if x > y {
		return x
	}
	return y
}

func main ()  {
	fmt.Println(canJump([]int{2, 3, 1, 1, 4}))
	fmt.Println(canJump([]int{3, 2, 1, 0, 4}))
}
