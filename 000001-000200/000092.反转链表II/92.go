package main

import "fmt"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// 方法一：用时 0 ms
// 执行用时超过了 100 %
// 消耗内存超过了 100 %
// 难度: 中等
func reverseBetween(head *ListNode, left int, right int) *ListNode {
	if left == right {
		return head
	}
	curLeft := &ListNode{0, nil}
	curLeft.Next = head
	head = curLeft
	cnt := 1
	for ; cnt < left; cnt++ {
		curLeft = curLeft.Next
	}
	nextLeft := curLeft.Next
	rightNode := nextLeft
	curNode := nextLeft.Next
	for cnt < right {
		nextNode := curNode.Next
		curLeft.Next = curNode
		curNode.Next = nextLeft
		nextLeft = curNode
		curNode = nextNode
		cnt ++
	}
	rightNode.Next = curNode
	return head.Next
}

func main ()  {
	root := genList([]int{1, 2, 3, 4, 5})
	fmt.Println("list:", root)
	ret := reverseBetween(root, 2, 4)
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
