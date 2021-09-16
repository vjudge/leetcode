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
// 执行用时超过了 79%
// 消耗内存超过了 62%
var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head
  }
  let noduphead = head
  let nodupval = noduphead.val
  let curhead = head.next
  while (curhead) {
    while (curhead && nodupval == curhead.val) {
      curhead = curhead.next
    }
    noduphead.next = curhead
    noduphead = noduphead && noduphead.next
    nodupval = noduphead && noduphead.val
  }
  return head
};

console.log(main([1, 1, 2]))
console.log(main([1, 1, 2, 3, 3]))

function main (trvals) {
  let head = genList(trvals)
  return deleteDuplicates(head)
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
