package main

import "fmt"

func main ()  {
	root := genList([]int{1, 2, 3, 4, 5})
	fmt.Println("list:", root)
	for root != nil {
		fmt.Println(root.Val)
		root = root.Next
	}
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
	fmt.Println("head:", head)
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
