package main

import "fmt"

// 方法一：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 60 %
// 难度: 中等
func minimumSwap(s1 string, s2 string) int {
	if len(s1) != len(s2) {
		return -1
	}
	xy := 0
	yx := 0
	for i, j := 0, 0; i < len(s1) && j < len(s2); i ++ {
		if s1[i] == 'x' && s2[j] == 'y' {
			xy ++
		} else if s1[i] == 'y' && s2[j] == 'x' {
			yx ++
		}
		j ++
	}
	if (xy + yx) % 2 != 0 {
		return -1
	}
	ret := xy / 2 + yx / 2
	if xy % 2 != 0 {
		ret += 2
	}
	return ret
}

func main ()  {
	fmt.Println(minimumSwap("xx", "yy"))
	fmt.Println(minimumSwap("xy", "yx"))
	fmt.Println(minimumSwap("xy", "xx"))
	fmt.Println(minimumSwap("xxyyxyxyxx", "xyyxyxxxyx"))
}