package main

import "fmt"

// 方法一：用时 0ms
// 执行用时超过了 79%
// 消耗内存超过了 0%
func hanota (A []int, B []int, C []int) []int {
	if A == nil {
		return nil
	}
	move(len(A), &A, &B, &C)
	return C
}

func move (n int, A *[]int, B *[]int, C *[]int)  {
	if n < 0 {
		return
	}
	if n == 1 {
		*C = append(*C, (*A)[len(*A)-1])
		*A = (*A)[:len(*A)-1]
		return
	}
	move(n-1, A, C, B)
	move(1, A, B, C)
	move(n-1, B, A, C)
}

// 方法一：用时 0ms
// 执行用时超过了 79%
// 消耗内存超过了 0%
//func hanota (A []int, B []int, C []int) []int {
//	return A
//}

func main ()  {
	A := []int{1, 2, 3, 4, 5}
	B := []int{}
	C := []int{}
	ret := hanota(A, B, C)
	fmt.Println("ret:", ret)
}
