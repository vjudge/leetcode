package main

import (
	"fmt"
	"sort"
)

// 方法一：用时 20 ms
// 执行用时超过了 89 %
// 消耗内存超过了 69 %
// 难度: 中等
func groupAnagrams(strs []string) [][]string {
	smap := map[string][]string{}
	for _, str := range strs {
		s := []byte(str)
		sort.Slice(s, func(i, j int) bool { return s[i] < s[j] })
		key := string(s)
		smap[key] = append(smap[key], str)
	}
	ret := make([][]string, 0, len(smap))
	for _, v := range smap {
		ret = append(ret, v)
	}
	return ret
}

func main ()  {
	fmt.Println(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}))
	fmt.Println(groupAnagrams([]string{""}))
	fmt.Println(groupAnagrams([]string{"a"}))
}