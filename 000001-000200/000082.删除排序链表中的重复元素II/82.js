/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 方法一：用时 76 ms
// 执行用时超过了 74 %
// 消耗内存超过了 81 %
// 难度: 中等
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    let curNode = new ListNode(0, head)
    head = curNode
    while (curNode.next && curNode.next.next) {
        if (curNode.next.val == curNode.next.next.val) {
            let curVal = curNode.next.val
            while (curNode.next && curNode.next.val == curVal) {
                curNode.next = curNode.next.next
            }
        } else {
            curNode = curNode.next
        }
    }
    return head.next
}

console.log(main([1, 2, 3, 3, 4, 4, 5]))

function main (trvals) {
    let head = genList(trvals)
    return deleteDuplicates(head)
}

function genList (trvals) {
    let result = null
    let head = null
    for (let i = 0; i < trvals.length; i++) {
        curnode = new ListNode(trvals[i])
        if (!result) {
            result = curnode
            head = result
        } else {
            head.next = curnode
            head = head.next
        }
    }
    return result
}

function ListNode (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}