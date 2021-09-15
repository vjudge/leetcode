/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 方法一：用时 88ms
// 执行用时超过了 75%
// 消耗内存超过了 91%
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let head1 = headA
  let head2 = headB
  while (head1 !== head2) {
    head1 = head1 ? head1.next : headB
    head2 = head2 ? head2.next : headA
  }
  return head1
};
