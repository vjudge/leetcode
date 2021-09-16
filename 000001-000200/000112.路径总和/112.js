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
 * @param {number} targetSum
 * @return {boolean}
 */
// 方法一：用时 80ms
// 执行用时超过了 70%
// 消耗内存超过了 99%
var hasPathSum = function(root, targetSum) {
  if (!root) { return false }
  if (!root.left && !root.right) {
    return targetSum === root.val
  }
  return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val)
};

console.log(main([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22))
console.log(main([1, 2, 3], 5))
console.log(main([-2, null, -3], -5))
console.log(main([1, -2, -3, 1, 3, -2, null, -1], -1))

function main (trvals, targetSum) {
  let root = genTree(trvals)
  return hasPathSum(root, targetSum)
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
