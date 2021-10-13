package main

import "fmt"

// 方法一: 用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 73.3 %
func numWays(n int) int {
	if n < 2 {
		return 1
	}
	n1 := 1
	n2 := 1
	ret := 2
	for i := 2; i <= n; i ++ {
		ret = (n1 + n2) % 1000000007
		n2 = n1
		n1 = ret
	}
	return ret
}

func main ()  {
	fmt.Println(numWays(2))
	fmt.Println(numWays(7))
	fmt.Println(numWays(0))
}