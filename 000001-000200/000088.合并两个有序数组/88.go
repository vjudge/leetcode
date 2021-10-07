package main

import (
	"fmt"
)

// 方法一：用时 0ms
//// 执行用时超过了 100%
//// 消耗内存超过了
func merge(nums1 []int, m int, nums2 []int, n int)  {
	size := m + n - 1
	for i, j := m- 1, n - 1; i >= 0 || j >= 0; {
		if i == -1 {
			nums1[size] = nums2[j]
			size --
			j --
		} else if j == -1 {
			nums1[size] = nums1[i]
			size--
			i--
		} else if nums1[i] == nums2[j] {
			nums1[size] = nums1[i]
			size --
			i --
			nums1[size] = nums2[j]
			size --
			j --
		} else if nums1[i] > nums2[j] {
			nums1[size] = nums1[i]
			size --
			i --
		} else {
			nums1[size] = nums2[j]
			size --
			j --
		}
	}
	fmt.Println("num1:", nums1)
}

func main ()  {
	m := 3
	n := 6
	nums1 := []int{0, 0, 3, 0, 0, 0, 0, 0, 0}
	nums2 := []int{-1, 1, 1, 1, 2, 3}
	merge(nums1, m, nums2, n)
}
