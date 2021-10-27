/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 方法一：用时 64 ms
// 执行用时超过了 89 %
// 消耗内存超过了 84 %
// 难度: 中等
var reverseBetween = function(head, left, right) {
    if (left == right) {
        return head
    }
    let curLeft = new ListNode(0)
    curLeft.next = head
    head = curLeft
    let cnt = 1
    while (cnt < left) {
        curLeft = curLeft.next
        cnt ++
    }
    let nextLeft = curLeft.next
    let rightNode = nextLeft
    let curNode = nextLeft.next
    while (cnt < right) {
        let nextNode = curNode.next
        curLeft.next = curNode
        curNode.next = nextLeft
        nextLeft = curNode
        curNode = nextNode
        cnt ++
    }
    rightNode.next = curNode
    return head.next
};

console.log(main([1, 2, 3, 4, 5], 2, 4))

function main (trvals, left, right) {
    let head = genList(trvals)
    return reverseBetween(head, left, right)
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