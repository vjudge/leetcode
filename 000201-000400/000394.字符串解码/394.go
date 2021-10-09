package main

import (
	"fmt"
	"strconv"
	"strings"
)

// 方法一：用时 0ms
// 执行用时超过了 100%
// 消耗内存超过了 5.29%
// 难度: 中等
func decodeString(s string) string {
	ret := []string{}
	cnt := []int{}
	num := string("")
	for _, str := range s {
		if  str >= '0' && str <= '9' {
			num = num + string(str)
		} else if str == ']' {
			j := findLastEle(ret)
			repeatStr := []string{}
			for k := j + 1; k < len(ret); k++ {
				repeatStr = append(repeatStr, string(ret[k]))
			}
			ret = ret[:j]
			repeatCnt := cnt[len(cnt) - 1]
			for k := 0; k < repeatCnt; k ++ {
				ret = append(ret, repeatStr...)
			}
			cnt = cnt[:len(cnt) - 1]
		} else {
			ret = append(ret, string(str))
			if str == '[' {
				intNum, _ := strconv.Atoi(num)
				cnt = append(cnt, intNum)
				num = string("")
			}
		}
	}
	return strings.Join(ret, "")
}

func findLastEle (s []string) int {
	for i := len(s) - 1; i >= 0; i -- {
		if s[i] == "[" {
			return i
		}
	}
	return 0
}

func main ()  {
	fmt.Println(decodeString("3[a]2[bc]"))
	fmt.Println(decodeString("3[a2[c]]"))
	fmt.Println(decodeString("2[abc]3[cd]ef"))
	fmt.Println(decodeString("abc3[cd]xyz"))
	fmt.Println(decodeString("13[a]21[bc]"))
}
