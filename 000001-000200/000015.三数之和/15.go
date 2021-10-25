package main

import (
	"fmt"
	"sort"
)

// 方法一：用时 28 ms
// 执行用时超过了 93 %
// 消耗内存超过了 77 %
// 难度: 中等
func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	ret := [][]int{}
	for i := 0; i < len(nums) - 2; i++ {
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i - 1] {
			continue
		}
		for left, right := i + 1, len(nums) - 1; left < right; {
			if nums[left] + nums[right] == -nums[i] {
				ret = append(ret, []int{nums[i], nums[left], nums[right]})
				left ++
				right --
				for ; nums[left] == nums[left - 1] && left < right; {
					left ++
				}
				for ; nums[right] == nums[right + 1] && left < right; {
					right --
				}
			} else if nums[left] + nums[right] > -nums[i] {
				right --
			} else {
				left ++
			}
		}
	}
	return ret
}

func main ()  {
	fmt.Println(threeSum([]int{-1, 0, 1, 2, -1, -4}))
	fmt.Println(threeSum([]int{}))
	fmt.Println(threeSum([]int{0}))
	fmt.Println(threeSum([]int{0, 0, 0}))
}
