function main (trvals, n) {
  let head = genList(trvals)
  return hasPathSum(head, n)
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
