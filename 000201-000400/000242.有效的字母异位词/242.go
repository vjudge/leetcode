package main

import "fmt"

// 方法一：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 100 %
// 难度: 简单
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	stotal := [26]int{}
	ttotal := [26]int{}
	for _, item := range s {
		stotal[item - 'a'] ++
	}
	for _, item := range t {
		ttotal[item - 'a'] ++
	}
	return stotal == ttotal
}

func main ()  {
	fmt.Println(isAnagram("anagram", "nagaram"))
	fmt.Println(isAnagram("rat", "cat"))
}
