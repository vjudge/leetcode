/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
 this.val = val;
 this.next = null;
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 方法一：用时 76ms
// 执行用时超过了 83%
// 消耗内存超过了 77%
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};
