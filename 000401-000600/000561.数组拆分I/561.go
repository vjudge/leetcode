package main

import (
	"fmt"
	"sort"
)

// 方法一：用时 56 ms
// 执行用时超过了 97 %
// 消耗内存超过了 25 %
func arrayPairSum(nums []int) int {
	sort.Ints(nums)
	ret := 0
	for i := 0; i < len(nums); i+=2 {
		ret += nums[i]
	}
	return ret
}

func main ()  {
	fmt.Println(arrayPairSum([]int{1, 4, 2, 3}))
	fmt.Println(arrayPairSum([]int{6, 2, 6, 5, 1, 2}))
}
