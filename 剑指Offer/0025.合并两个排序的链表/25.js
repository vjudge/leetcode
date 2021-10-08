/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 方法一：用时 60ms
// 执行用时超过了 100%
// 消耗内存超过了 72%
var mergeTwoLists = function(l1, l2) {
  let result = null
  let rhead = result
  while(l1 || l2) {
    let val1 = l1 ? l1.val : 200
    let val2 = l2 ? l2.val : 200
    let curhead = val1 <= val2 ? l1 : l2
    if (!result) {
      result = curhead
      rhead = curhead
    } else {
      rhead.next = curhead
      rhead = rhead.next
    }
    val1 <= val2 ? (l1 = l1.next) : (l2 = l2.next)
  }
  return result
};

function genList(l1, l2) {
  let lnode1 = null
  let lnode2 = null
  let head = null
  for (let i = 0; i < l1.length; i++) {
    curnode = new ListNode(l1[i])
    if (!lnode1) {
      lnode1 = curnode
      head = lnode1
    } else {
      head.next = curnode
      head = head.next
    }
  }
  for (let i = 0; i < l2.length; i++) {
    curnode = new ListNode(l2[i])
    if (!lnode2) {
      lnode2 = curnode
      head = lnode2
    } else {
      head.next = curnode
      head = head.next
    }
  }
  console.log('l1: ', lnode1)
  console.log('l2: ', lnode2)
  return mergeTwoLists(lnode1, lnode2)
}

console.log(genList([1, 2, 4], [1, 3, 4]))
