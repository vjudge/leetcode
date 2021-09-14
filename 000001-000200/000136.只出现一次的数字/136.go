package main

import "fmt"

// 方法一：用时 8ms
// 执行用时超过了 100%
// 消耗内存超过了 70%
func singleNumber(nums []int) int {
    result := 0
    for i = 0; i < len(nums); i ++ {
        result ^= nums[i]
    }
    return result
}
