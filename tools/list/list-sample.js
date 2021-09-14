function ListNode (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function genList (l1) {
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
  // return isPalindrome(lnode1)
}

console.log(genList([1, 2, 2, 1]))
