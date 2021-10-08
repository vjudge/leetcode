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
// 方法一：用时 80ms
// 执行用时超过了 31%
// 消耗内存超过了 71%
var reverseList = function(head) {
  let prev = null
  let curr_head = head
  while (curr_head) {
    const next = curr_head.next
    curr_head.next = prev
    prev = curr_head
    curr_head = next
  }
  return prev
};
