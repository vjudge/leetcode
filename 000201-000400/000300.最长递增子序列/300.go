package main

import "fmt"

//方法一：用时 56 ms
// 执行用时超过了 61 %
// 消耗内存超过了 6 %
// 难度: 中等
func lengthOfLIS(nums []int) int {
	if len(nums) < 2 {
		return len(nums)
	}
	dp := []int{1}
	ret := 1
	for i := 1; i < len(nums); i++ {
		dp = append(dp, 1)
		for j := 0; j < i; j++ {
			if nums[i] > nums[j] {
				dp[i] = max(dp[i], dp[j] + 1)
			}
		}
		ret = max(ret, dp[i])
	}
	return ret
}

func max (x, y int) int {
	if x > y {
		return x
	}
	return y
}

func main ()  {
	fmt.Println(lengthOfLIS([]int{10, 9, 2, 5, 3, 7, 101, 18}))
	fmt.Println(lengthOfLIS([]int{0, 1, 0, 3, 2, 3}))
	fmt.Println(lengthOfLIS([]int{7, 7, 7, 7, 7, 7, 7}))
}
