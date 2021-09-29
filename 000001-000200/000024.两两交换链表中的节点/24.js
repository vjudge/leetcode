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
// 方法一：用时 64ms
// 执行用时超过了 91%
// 消耗内存超过了 53%
// 难度: 中等
var swapPairs = function(head) {
  if (!head || !head.next) {
    return head
  }
  let root = new ListNode(0)
  root.next = head
  let curhead = root
  while (curhead.next && curhead.next.next) {
    let prenode = curhead.next
    let nextnode = curhead.next.next
    curhead.next = nextnode
    prenode.next = nextnode.next
    nextnode.next = prenode
    curhead = prenode
  }
  return root.next
};

console.log(main([1, 2, 3, 4]))


function main (trvals) {
  let head = genList(trvals)
  return swapPairs(head)
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
