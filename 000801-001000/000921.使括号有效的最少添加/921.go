package main

import "fmt"

// 方法一：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 100 %
// 难度: 中等
func minAddToMakeValid(s string) int {
	ret := 0
	mstack := 0
	for i := 0; i < len(s); i++ {
		if s[i] == ')' {
			if mstack > 0 {
				mstack --
				continue
			}
			ret ++
			continue
		}
		mstack++
	}
	return ret + mstack
}

func main ()  {
	fmt.Println(minAddToMakeValid("())"))
	fmt.Println(minAddToMakeValid("((("))
	fmt.Println(minAddToMakeValid("()"))
	fmt.Println(minAddToMakeValid("()))(("))
}
