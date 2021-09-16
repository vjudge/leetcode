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
// 方法一：用时 68ms
// 执行用时超过了 71%
// 消耗内存超过了 85%
var middleNode = function(head) {
  if (!head.next) {
    return head
  }
  let fhead = head.next
  let shead = head
  while (fhead) {
    fhead = fhead.next
    fhead = fhead ? fhead.next : null
    shead = shead.next
  }
  return shead
};

console.log(main([1, 2, 3, 4, 5]))
console.log(main([1, 2, 3, 4]))

function main (trvals) {
  let head = genList(trvals)
  return middleNode(head)
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
