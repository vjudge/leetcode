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
// 执行用时超过了 100%
// 消耗内存超过了 68%
func reverseList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	ret := head
	head = head.Next
	ret.Next = nil
	for head != nil {
		curHead := head
		head = head.Next
		curHead.Next = ret
		ret = curHead
	}
	return ret
}

func main ()  {
	root := genList([]int{1, 2, 3, 4, 5})
	//for root != nil {
	//	fmt.Print(" ", root.Val)
	//	root = root.Next
	//}
	ret := reverseList(root)
	fmt.Println("\n=====", ret)
	for ret != nil {
		fmt.Print(" ", ret.Val)
		ret = ret.Next
	}
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
