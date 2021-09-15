/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 方法一：用时 76ms
// 执行用时超过了 78%
// 消耗内存超过了 85%
var maxDepth = function(root) {
  if(root == null) {
    return 0
  }
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
};


function main(trvals) {
  let root = genTree(trvals)
  return maxDepth(root)
}

console.log(main([3, 9, 20, null, null, 15, 7]))



function genTree (trvals) {
  let root = new TreeNode(trvals[0])
  let queue = [root]
  let start = 1
  while (queue.length && start < trvals.length) {
    let curnode = queue.shift()
    if (trvals[start]) {
      curnode.left = new TreeNode(trvals[start])
      queue.push(curnode.left)
    }
    start ++
    if (trvals[start]) {
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
