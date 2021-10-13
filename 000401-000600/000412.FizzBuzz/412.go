package main

import (
	"fmt"
	"strconv"
)

// 方法一：用时 8ms
// 执行用时超过了 9%
// 消耗内存超过了 30%
func fizzBuzz(n int) []string {
	ret := []string{}
	for i := 1; i <= n; i++ {
		if i % 3 != 0 && i % 5 != 0 {
			ret = append(ret, strconv.Itoa(i))
		} else if i % 3 == 0 && i % 5 != 0 {
			ret = append(ret, "Fizz")
		} else if i % 3 != 0 && i % 5 == 0 {
			ret = append(ret, "Buzz")
		} else {
			ret = append(ret, "FizzBuzz")
		}
	}
	return ret
}

func main ()  {
	fmt.Println(fizzBuzz(15))
}
