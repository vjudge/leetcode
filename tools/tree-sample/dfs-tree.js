// 递归方式
function dfs_tree (root) {
  let result = []
  dfs(root)
  return result

  function dfs (node) {
    if (!node) {
      return
    }
    result.push(node.val) // 前序遍历
    dfs(node.left)
    // result.push(node.val) // 中序遍历
    dfs(node.right)
    // result.push(node.val) // 后序遍历
  }
}

function iterate_tree (root) {
  let result = []
  let stack = [root]
  while (stack.length) {
    
  }
}


console.log(main([1, -2, -3, 1, 3, -2, null, -1]))
console.log(main([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]))

function main (trvals) {
  let root = genTree(trvals)
  return dfs_tree(root)
}

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
