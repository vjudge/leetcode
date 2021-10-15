package main

import (
	"sort"
)

// 方法一：用时 20 ms
// 执行用时超过了 84 %
// 消耗内存超过了 95 %
func maximumUnits(boxTypes [][]int, truckSize int) int {
	sort.Slice(boxTypes, func(i, j int) bool {
		return boxTypes[j][1] < boxTypes[i][1]
	})
	ret := 0
	for i := 0; i < len(boxTypes) && truckSize > 0; i++ {
		curSize := boxTypes[i][0]
		if boxTypes[i][0] > truckSize {
			curSize = truckSize
		}
		ret += curSize * boxTypes[i][1]
		truckSize -= curSize
	}
	return ret
}

func main ()  {
	//fmt.Println(maximumUnits([]int{}, 8))
	//fmt.Println(maximumUnits([]int{}, 8))
}
