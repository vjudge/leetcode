package main

import "fmt"

//方法一: 用时 8 ms
// 执行用时超过了 83 %
// 消耗内存超过了 100 %
// 难度: 简单
func peakIndexInMountainArray(arr []int) int {
	ret := 1
	for ;ret < len(arr); ret ++ {
		if arr[ret] > arr[ret - 1] && arr[ret] > arr[ret + 1] {
			break
		}
	}
	return ret
}

func main ()  {
	fmt.Println(peakIndexInMountainArray([]int{0, 1, 0}))
	fmt.Println(peakIndexInMountainArray([]int{0, 2, 1, 0}))
	fmt.Println(peakIndexInMountainArray([]int{0, 10, 5, 2}))
	fmt.Println(peakIndexInMountainArray([]int{3, 4, 5, 1}))
	fmt.Println(peakIndexInMountainArray([]int{24, 69, 100, 99, 79, 78, 67, 36, 26, 19}))
}