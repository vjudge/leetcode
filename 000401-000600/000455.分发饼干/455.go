package main

import (
	"fmt"
	"sort"
)

// 方法一: 用时 28ms
// 执行用时超过了 98%
// 消耗内存超过了 91%
func findContentChildren(g []int, s []int) int {
	sort.Ints(g)
	sort.Ints(s)
	ret := 0
	for i, j := 0, 0; i < len(g) && j < len(s); i ++ {
		for j < len(s) && g[i] > s[j] {
			j ++
		}
		if j < len(s) {
			ret ++
			j ++
		}
	}
	return ret
}

func main ()  {
	fmt.Println(findContentChildren([]int{1, 2, 3}, []int{3}))
	fmt.Println(findContentChildren([]int{3, 2, 1}, []int{1, 1}))
	fmt.Println(findContentChildren([]int{1, 2}, []int{1, 2, 3}))
	fmt.Println(findContentChildren([]int{10, 9, 8, 7}, []int{5, 6, 7, 8}))
	fmt.Println(findContentChildren([]int{10, 9, 8, 7}, []int{10, 9, 8, 7}))
}

