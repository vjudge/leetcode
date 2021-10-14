package main

import "fmt"

//方法一: 用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 71 %
func isSubsequence(s string, t string) bool {
	if len(s) == 0 {
		return true
	}
	i, j := 0, 0
	for ; i < len(s) && j < len(t); {
		if s[i] == t[j] {
			i ++
		}
		j ++
	}
	return i == len(s)
}

func main ()  {
	fmt.Println(isSubsequence("abc", "ahbgdc"))
	fmt.Println(isSubsequence("axc", "ahbgdc"))
	fmt.Println(isSubsequence("", "ahbgdc"))
}