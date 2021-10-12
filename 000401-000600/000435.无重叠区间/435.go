package main

import (
	"fmt"
	"sort"
)

// 方法一: 用时 224ms
// 执行用时超过了 51%
// 消耗内存超过了 54%
// 难度: 中等
func eraseOverlapIntervals(intervals [][]int) int {
	if len(intervals) == 0 {
		return 0
	}
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][1] < intervals[j][1]
	})
	ret := 1
	curLast := intervals[0][1]
	for i := 0; i < len(intervals); i++ {
		if intervals[i][0] >= curLast {
			ret ++
			curLast = intervals[i][1]
		}
	}
	return len(intervals) - ret
}

func main ()  {
	params := [][]int{[]int{3,4}, []int{2,3}, []int{1,2}, []int{1,3}}
	fmt.Println(eraseOverlapIntervals(params))
}
