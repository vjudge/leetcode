package main

import "fmt"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// 方法一：用时 4 ms
// 执行用时超过了 77 %
// 消耗内存超过了 100 %
// 难度: 中等
func deleteDuplicates(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	curNode := &ListNode{0, head}
	head = curNode
	for curNode.Next != nil && curNode.Next.Next != nil {
		if curNode.Next.Val == curNode.Next.Next.Val {
			curVal := curNode.Next.Val
			for curNode.Next != nil && curNode.Next.Val == curVal {
				curNode.Next = curNode.Next.Next
			}
		} else {
			curNode = curNode.Next
		}
	}
	return head.Next
}


func main ()  {
	root := genList([]int{1, 2, 3, 3, 4, 4, 5})
	fmt.Println("list:", root)
	ret := deleteDuplicates(root)
	for ret != nil {
		fmt.Println(ret.Val)
		ret = ret.Next
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