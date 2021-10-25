package main

import "fmt"

// 方法一：用时 4 ms
// 执行用时超过了 98 %
// 消耗内存超过了 35 %
// 难度: 简单
func twoSum(nums []int, target int) []int {
	nmap := map[int]int{}
	for i, num := range nums {
		div := target - num
		if _, ok := nmap[div]; ok {
			return []int{nmap[div], i}
		}
		nmap[num] = i
	}
	return nil
}

func main ()  {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
	fmt.Println(twoSum([]int{3, 2, 4}, 6))
	fmt.Println(twoSum([]int{3, 3}, 6))
}
