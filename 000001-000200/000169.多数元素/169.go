package main

import "fmt"

// 方法一: 用时 16 ms
// 执行用时超过了 89 %
// 消耗内存超过了 8 %
// 难度: 简单
func majorityElement(nums []int) int {
	mergeNums := map[int]int{}
	for _, num := range nums {
		if _, ok := mergeNums[num]; ok {
			mergeNums[num] ++
		} else {
			mergeNums[num] = 0
		}
	}

	ret := nums[0]
	for key, val := range mergeNums {
		if val > mergeNums[ret] {
			ret = key
		}
	}

	return ret
}

func main ()  {
	fmt.Println(majorityElement([]int{3, 2, 3}))
	fmt.Println(majorityElement([]int{2, 2, 1, 1, 1, 2, 2}))
}
