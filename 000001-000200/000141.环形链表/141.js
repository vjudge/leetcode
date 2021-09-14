/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 方法一：用时 76ms
// 执行用时超过了 85%
// 消耗内存超过了 60%
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }
  let slowhead = head
  let fasthead = head.next
  while (slowhead) {
    if (slowhead === fasthead) {
      return true
    }
    fasthead = fasthead ? fasthead.next : null
    fasthead = fasthead ? fasthead.next : null
    slowhead = slowhead ? slowhead.next : null
  }
  return false
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function genList(l1, k) {
  let lnode1 = null
  let head = null
  let khead = null
  for (let i = 0; i < l1.length; i++) {
    curnode = new ListNode(l1[i])
    if (!lnode1) {
      lnode1 = curnode
      head = lnode1
    } else {
      head.next = curnode
      head = head.next
    }
    if (k == i) {
      khead = head
    }
  }
  head.next = khead
  console.log('khead: ', khead)
  console.log('head: ', head)
  console.log('l1: ', lnode1)
  return hasCycle(lnode1)
}

console.log(genList([3, 2, 0, -4], 1))
console.log(genList([1, 2], -1))
