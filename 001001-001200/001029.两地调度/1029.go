package main

import (
	"fmt"
	"sort"
)

// 方法一：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 93 %
// 难度: 中等
func twoCitySchedCost(costs [][]int) int {
	sort.Slice(costs, func(i, j int) bool {
		return costs[i][0] - costs[i][1] < costs[j][0] - costs[j][1]
	})
	ret := 0
	n := len(costs) / 2
	for i, cost := range costs {
		curI := 0
		if i >= n {
			curI = 1
		}
		ret += cost[curI]
	}
	return ret
}

func main ()  {
	fmt.Println(twoCitySchedCost([][]int{[]int{10, 20}, []int{30, 200}, []int{400, 50}, []int{30, 20}}))
	fmt.Println(twoCitySchedCost([][]int{[]int{259, 770}, []int{448, 54}, []int{926, 667}, []int{184,139}, []int{840,118}, []int{577,469}}))
	fmt.Println(twoCitySchedCost([][]int{[]int{515,563}, []int{451, 713}, []int{537, 709}, []int{343, 819}, []int{855, 779}, []int{457, 60}, []int{650, 359}, []int{631, 42}}))
}