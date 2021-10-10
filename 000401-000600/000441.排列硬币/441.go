package main

import (
	"fmt"
)

// 方法二: 用时 4ms
// 执行用时超过了 73%
// 消耗内存超过了 99%
func arrangeCoins(n int) int {
	left := 0
	right := n
	for ;left < right; {
		mid := int((right - left + 1) / 2) + left
		if (mid + 1) * mid <= 2 * n {
			left = mid
		} else {
			right = mid - 1
		}
	}
	return left
}

func main ()  {
	fmt.Println(arrangeCoins(5))
	fmt.Println(arrangeCoins(8))
}
