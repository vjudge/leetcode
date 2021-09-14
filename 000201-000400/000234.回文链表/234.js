/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 方法一：用时 108ms
// 执行用时超过了 100%
// 消耗内存超过了 98%
var isPalindrome = function(head) {
  let fasthead = head
  if (!fasthead) {
    return true
  }
  fasthead = fasthead.next
  let slowhead = head
  let upnode = head
  let uphead = head
  let flag = true
  while (fasthead) {
    fasthead = fasthead.next
    uphead = slowhead
    slowhead = slowhead.next
    uphead.next = upnode
    if (flag) {
      upnode.next = null
      flag = false
    }
    upnode = uphead
    if (!fasthead) {
      break
    }
    fasthead = fasthead.next
    if (!fasthead) {
      slowhead = slowhead.next
    }
  }
  console.log('upnode: ', JSON.stringify(upnode))
  console.log('slowhead: ', JSON.stringify(slowhead))
  while (slowhead) {
    if (slowhead.val != upnode.val) {
      return false
    }
    slowhead = slowhead.next
    upnode = upnode.next
  }
  return true
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function genList(l1) {
  let lnode1 = null
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
  console.log('l1: ', lnode1)
  return isPalindrome(lnode1)
}

console.log(genList([
  8, 0, 7, 1, 7, 7, 9, 7, 5, 2, 9, 1, 7, 3, 7, 0, 6, 5, 1, 7, 7, 9,
  3, 8, 1, 5, 7, 7, 8, 4, 0, 9, 3, 7, 3, 4, 5, 7, 4, 8, 8, 5, 8,
  9,
  8, 5, 8, 8, 4, 7, 5, 4, 3, 7, 3, 9, 0, 4, 8, 7, 7, 5, 1, 8, 3,
  9, 7, 7, 1, 5, 6, 0, 7, 3, 7, 1, 9, 2, 5, 7, 9, 7, 7, 1, 7, 0, 8
]))

// console.log(genList([1, 2, 2, 1]))
// console.log(genList([1, 2]))
// console.log(genList([1, 2, 3, 2, 1]))
