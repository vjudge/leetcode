package main

import "fmt"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	root := &ListNode{0, head}
	curhead := root
	fmt.Println(curhead.Next, curhead.Next.Next)
	for curhead.Next != nil && curhead.Next.Next != nil {
		prenode := root.Next
		nextnode := root.Next.Next
		fmt.Printf("prenode: %v\n", prenode)
		curhead.Next = nextnode
		prenode.Next = nextnode.Next
		nextnode.Next = prenode
		curhead = nextnode
	}
	return root.Next
}


func main ()  {
	root := genList([]int{1, 2, 3, 4, 5})
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