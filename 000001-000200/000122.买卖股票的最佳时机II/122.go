package main

import (
	"fmt"
)

// 方法一：用时 4ms
// 执行用时超过了 87%
// 消耗内存超过了 20%
// 难度: 中等
func maxProfit(prices []int) int {
	dp0 := make([]int, len(prices))
	dp1 := make([]int, len(prices))
	dp1[0] = -prices[0]
	for i := 1; i < len(prices); i++ {
		dp0[i] = max(dp0[i - 1], dp1[i - 1] + prices[i])
		//fmt.Printf("i=%d dp0i=%d prices=%d dp0=%d\n", i, dp0[i - 1], prices[i], dp0[i])
		dp1[i] = max(dp1[i - 1], dp0[i - 1] - prices[i])
		//fmt.Printf("i=%d dp1i=%d prices=%d dp1=%d\n", i, dp1[i - 1], prices[i], dp1[i])
	}
	//fmt.Println("dp0:", dp0)
	//fmt.Println("dp1:", dp1)
	return dp0[len(prices) - 1]
}

func max (m int, n int) int {
	if m > n {
		return m
	}
	return n
}

func main ()  {
	fmt.Println(maxProfit([]int{7, 1, 5, 3, 6, 4}))
	fmt.Println(maxProfit([]int{1, 2, 3, 4, 5}))
}
