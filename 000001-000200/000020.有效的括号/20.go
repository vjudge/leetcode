package main

import "fmt"

// 方法一：用时 0ms
// 执行用时超过了 94%
// 消耗内存超过了
func isValid(s string) bool {
	if len(s) % 2 == 1 {
		return false
	}
	mmap := map[byte]byte{
		')': '(',
		'}': '{',
		']': '[',
	}
	stack := []byte{}
	for i := 0; i < len(s); i++ {
		if mmap[s[i]] > 0 {
			if len(stack) > 0 && stack[len(stack)-1] == mmap[s[i]] {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		} else {
			stack = append(stack, s[i])
		}
	}
	return len(stack) == 0
}

func main ()  {
	//str := "()"
	//str := "()[]{}"
	//str := "(]"
	//str := "([)]"
	//str := "{[]}"
	str := "){"
	cnt := isValid(str)
	fmt.Println("cnt:", cnt)
}
