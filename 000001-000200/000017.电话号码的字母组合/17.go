package main

import (
	"fmt"
	"strconv"
	"strings"
)

// 方法一：用时 0ms
// 执行用时超过了 100%
// 消耗内存超过了 22%
// 难度: 中等
func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return []string{}
	}
	letters := []string{"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}
	i0, _ := strconv.Atoi(string(digits[0]))
	ret := strings.Split(letters[i0], "")
	for i := 1; i < len(digits); i++ {
		ii, _ := strconv.Atoi(string(digits[i]))
		tmp := []string{}
		for k := 0; k < len(ret); k++ {
			for j := 0; j < len(letters[ii]); j++ {
				tmp = append(tmp, ret[k] + string(letters[ii][j]))
			}
		}
		ret = tmp
	}
	return ret
}

func main ()  {
	fmt.Println(letterCombinations("23"))
}
