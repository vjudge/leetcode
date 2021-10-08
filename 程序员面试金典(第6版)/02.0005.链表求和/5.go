package main

import "fmt"

// 方法一：用时 12ms
// 执行用时超过了 54%
// 消耗内存超过了 88%
// 难度: 中等
func addTwoNumbers (l1 *ListNode, l2 *ListNode) *ListNode {
	var ret *ListNode
	var curHead *ListNode
	flag := 0
	for head1, head2 := l1, l2; head1 != nil || head2 != nil; {
		sum := getVal(head1) + getVal(head2) + flag
		fmt.Printf("[%d, %d] flag=%d sum=%d\n", getVal(head1), getVal(head2), flag, sum)
		curNode := createNode(sum % 10)
		flag = int(sum / 10)
		if ret == nil {
			ret = curNode
			curHead = curNode
		} else {
			curHead.Next = curNode
			curHead = curHead.Next
		}
		if head1 != nil {
			head1 = head1.Next
		}
		if head2 != nil {
			head2 = head2.Next
		}
	}
	fmt.Println("-------")
	for ; flag > 0; {
		curNode := createNode(flag % 10)
		curHead.Next = curNode
		curHead = curHead.Next
		flag = int(flag / 10)
	}
	return ret
}

func getVal (node *ListNode) int {
	if node != nil {
		return node.Val
	}
	return 0
}

func createNode(val int)  *ListNode {
	return &ListNode{val, nil}
}

func main ()  {
	L1 := genList([]int{1, 1, 1})
	L2 := genList([]int{9, 9, 9, 9, 9, 9})
	ret := addTwoNumbers(L1, L2)
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