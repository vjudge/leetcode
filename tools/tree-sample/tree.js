function genTree (trvals) {
  let root = new TreeNode(trvals[0])
  let queue = [root]
  let start = 1
  while (queue.length && start < trvals.length) {
    let curnode = queue.shift()
    if (trvals[start] != undefined) {
      curnode.left = new TreeNode(trvals[start])
      queue.push(curnode.left)
    }
    start ++
    if (trvals[start] != undefined) {
      curnode.right = new TreeNode(trvals[start])
      queue.push(curnode.right)
    }
    start ++
  }
  return root
}


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
