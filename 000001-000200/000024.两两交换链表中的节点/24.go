package main

import "fmt"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// 方法一：用时 0ms
// 执行用时超过了 57%
// 消耗内存超过了
// 难度: 中等
func swapPairs(head *ListNode) *ListNode {
	root := &ListNode{0, head}
	curhead := root
	for curhead.Next != nil && curhead.Next.Next != nil {
		prenode := curhead.Next
		nextnode := curhead.Next.Next
		curhead.Next = nextnode
		prenode.Next = nextnode.Next
		nextnode.Next = prenode
		curhead = prenode
	}
	return root.Next
}


func main ()  {
	root := genList([]int{1, 2, 3, 4})
	retnode := swapPairs(root)
	for retnode != nil {
		fmt.Println(retnode.Val)
		retnode = retnode.Next
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