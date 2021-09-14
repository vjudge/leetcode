/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 方法一：用时 124ms
// 执行用时超过了 59%
// 消耗内存超过了 75%
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = null
  let heade1 = l1
  let heade2 = l2
  let rst_head = null
  let carry = 0

  while (heade1 || heade2 || carry) {
    let sum = (heade1 && heade1.val || 0) + (heade2 && heade2.val || 0) + carry
    if (!result) {
      result = new ListNode(sum % 10)
      rst_head = result
    } else {
      rst_head.next = new ListNode(sum % 10)
      rst_head = rst_head.next
    }

    heade1 = heade1 ? heade1.next : null
    heade2 = heade2 ? heade2.next : null
    carry = Math.floor(sum / 10)
  }
  return result
};

l1 = { val: 0, next: null }
l2 = { val: 0, next: null }
// console.log(addTwoNumbers(l1, l2))

l1 = { val: 2, next: { val: 4, next: null } }
l2 = { val: 5, next: { val: 6, next: {val: 4, next: null} } }
// console.log('result: ', addTwoNumbers(l1, l2))

l1 = { val: 9, next: { val: 9, next: {val: 9, next: {val: 9, next: {val: 9, next: {val: 9, next: {val: 9, next: null}}}}} } }
l2 = { val: 9, next: { val: 9, next: {val: 9, next: {val: 9, next: null}} } }
console.log(JSON.stringify(addTwoNumbers(l1, l2)))
