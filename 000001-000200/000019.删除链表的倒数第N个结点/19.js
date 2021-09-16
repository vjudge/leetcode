/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 方法一：用时 80ms
// 执行用时超过了 46%
// 消耗内存超过了 86%
var removeNthFromEnd = function(head, n) {
  let prehead = head
  let khead = head
  let cnt = 0
  while(prehead) {
    if (cnt > n) {
      khead = khead.next
    }
    prehead = prehead.next
    cnt ++
  }
  if (cnt == n) {
    return head.next
  }
  khead.next = khead.next && khead.next.next
  return head
};

console.log(main([1, 2], 2))
// console.log(main([1, 2, 3, 4, 5], 2))
console.log(main([1], 1))
// console.log(main([1], 2))

function main (trvals, n) {
  let head = genList(trvals)
  return removeNthFromEnd(head, n)
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
