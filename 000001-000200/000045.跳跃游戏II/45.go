package main

import "fmt"

//// 方法一: 用时 16 ms
//// 执行用时超过了 49 %
//// 消耗内存超过了 78 %
//// 难度: 中等
//func jump(nums []int) int {
//	position := len(nums) - 1
//	ret := 0
//	for position > 0 {
//		for i := 0; i < position; i++ {
//			if i + nums[i] >= position {
//				position = i
//				ret ++
//				break
//			}
//		}
//	}
//	return ret
//}

// 方法二: 用时 8 ms
// 执行用时超过了 100 %
// 消耗内存超过了 49 %
// 难度: 中等
func jump(nums []int) int {
	position := len(nums) - 1
	max := 0
	ret := 0
	minstep := 0
	for i := 0; i < position; i++ {
		max = maxInt(max, nums[i] + i)
		if i == minstep {
			ret ++
			minstep = max
		}
	}
	return ret
}

func maxInt (x, y int) int {
	if x > y {
		return x
	}
	return y
}

func main ()  {
	fmt.Println(jump([]int{2, 3, 1, 1, 4}))
	fmt.Println(jump([]int{2, 3, 0, 1, 4}))
}
