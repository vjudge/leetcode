package main

import "fmt"

// 方法一：用时 8 ms
// 执行用时超过了 84 %
// 消耗内存超过了 60 %
// 难度: 中等
func canConstruct(s string, k int) bool {
	if len(s) < k {
		return false
	}
	cnts := make([]int, 26)
	for i := 0; i < len(s); i++ {
		cnts[s[i] - 'a'] ++
	}
	jnum := 0
	for i := 0; i < len(cnts); i++ {
		if cnts[i] % 2 == 1 {
			jnum ++
		}
	}
	return jnum <= k
}

func main ()  {
	fmt.Println(canConstruct("annabelle", 2))
	fmt.Println(canConstruct("leetcode", 3))
	fmt.Println(canConstruct("true", 4))
	fmt.Println(canConstruct("yzyzyzyzyzyzyzy", 2))
	fmt.Println(canConstruct("cr", 7))
}