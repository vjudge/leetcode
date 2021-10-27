package main

import "fmt"

// 方法一：用时 4 ms
// 执行用时超过了 96 %
// 消耗内存超过了 70 %
// 难度: 简单
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	if l2 == nil {
		return l1
	}
	if l1 == nil {
		return l2
	}
	ret := l1
	curHead := ret
	if l2.Val < ret.Val { // 处理第一个值
		curHead = l2
		l2 = l2.Next
		curHead.Next = ret
		ret = curHead
	}
	for ; l2 != nil; {
		if curHead.Next == nil && l2.Val >= curHead.Val {
			curHead.Next = l2
			break
		}
		val1 := getVal(curHead.Next)
		val2 := getVal(l2)
		//fmt.Printf("[val1, val2] [%d, %d]\n", val1, val2)
		if val1 >= val2 {
			nextNode := curHead.Next
			curHead.Next = l2
			l2 = l2.Next
			curHead.Next.Next = nextNode
		}
		curHead = curHead.Next
	}
	return ret
}

func getVal (node *ListNode) int {
	if node != nil {
		return node.Val
	}
	return int(^uint(0) >> 1)
}

func getNextNode (node *ListNode) *ListNode {
	if node != nil {
		return node.Next
	}
	return nil
}

func main ()  {
	L1 := genList([]int{1, 1, 2})
	L2 := genList([]int{1, 2, 5, 6, 9, 9})
	ret := mergeTwoLists(L1, L2)
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