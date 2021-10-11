package main

import "fmt"

// 方法一：用时 116ms
// 执行用时超过了 18%
// 消耗内存超过了 68%
func lemonadeChange(bills []int) bool {
	five := 0
	ten := 0
	for i := 0; i < len(bills); i++ {
		if bills[i] == 5 {
			five ++
		} else if bills[i] == 10 {
			if five == 0 {
				return false
			}
			five --
			ten ++
		} else {
			if five > 0 && ten > 0 {
				five --
				ten --
			} else if five > 3 {
				 five -= 3
			} else {
				return false
			}
		}
	}
	return true
}

func main ()  {
	fmt.Println(lemonadeChange([]int{5, 5, 5, 10, 20}))
	fmt.Println(lemonadeChange([]int{5, 5, 10, 10, 20}))
}
