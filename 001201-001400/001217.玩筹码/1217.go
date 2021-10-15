package main

import "fmt"

// 方法一：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 100 %
func minCostToMoveChips(position []int) int {
	jnum := 0
	onum := 0
	for i := 0; i < len(position); i++ {
		if position[i] % 2 == 0 {
			onum ++
		} else {
			jnum ++
		}
	}
	if jnum < onum {
		return jnum
	}
	return onum
}

func main ()  {
	fmt.Println(minCostToMoveChips([]int{1, 2, 3}))
	fmt.Println(minCostToMoveChips([]int{2, 2, 2, 3, 3}))
}