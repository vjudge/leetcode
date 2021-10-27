package main

import "fmt"

// 方法一：用时 40 ms
// 执行用时超过了 13 %
// 消耗内存超过了 11 %
// 难度: 简单
func reversePrint (head *ListNode) []int {
	ret := []int{}
	for ; head != nil; {
		ret = append([]int{head.Val}, ret...)
		head = head.Next
	}
	return ret
}

// 方法二：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 91 %
// 难度: 简单
func reversePrint (head *ListNode) []int {
	ret := []int{}
	for ; head != nil; {
		ret = append(ret, head.Val)
		head = head.Next
	}
	for i := 0; i < len(ret) / 2; i++ {
		ret[i], ret[len(ret) - i - 1] = ret[len(ret) - i - 1], ret[i]
	}
	return ret
}

func main ()  {
	L1 := genList([]int{1, 2, 3, 4, 5})
	ret := reversePrint(L1)
	fmt.Println("\n=====", ret)
	return
}

type ListNode struct {
	Val int
	Next *ListNode
}

func CreateNode(val int)  *ListNode {
	return &ListNode{val, nil}
}

func genList (trvals []int) (root *ListNode) {
	var head *ListNode
	//fmt.Println("head:", head)
	for _, val := range trvals {
		node := CreateNode(val)
		if head == nil {
			root = node
			head = root
		} else {
			head.Next = node
			head = head.Next
		}
	}
	return
}
