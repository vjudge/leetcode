package main

import "fmt"

// 方法一：用时 4 ms
// 执行用时超过了 100 %
// 消耗内存超过了 33 %
// 难度: 简单
func lastRemaining(n int, m int) int {
	ret := 0
	for i := 2; i != n + 1; i++ {
		ret = (m + ret) % i
	}
	return ret
}

func main ()  {
	fmt.Println("ret:", lastRemaining(5, 3))
	fmt.Println("ret:", lastRemaining(10, 17))
}
