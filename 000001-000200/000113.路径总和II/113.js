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
 * @return {number[][]}
 */
// 方法一: 用时 84ms
// 执行用时超过了 74%
// 消耗内存超过了 59%
// 难度: 中等
var pathSum = function(root, targetSum) {
  if (!root) { return [] }

  let result = []
  sp(root, [root.val], targetSum-root.val)
  function sp (node, path, sum) {
    // console.log(`path=${JSON.stringify(path)} sum=${sum} node=`, node)
    if (!node.left && !node.right) {
      if (sum === 0) {
        result.push([...path])
      }
      return
    }

    if (node.left) {
      path.push(node.left.val)
      sp(node.left, path, sum - node.left.val)
      path.pop()
    }
    if (node.right) {
      path.push(node.right.val)
      sp(node.right, path, sum - node.right.val)
      path.pop()
    }
  }
  return result
};

function main (trvals, ts) {
  let root = genTree(trvals)
  return pathSum(root, ts)
}


console.log(main([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22))
console.log(main([1, 2, 3], 3))
console.log(main([-2, null, -3], -5))
console.log(main([1, -2, -3, 1, 3, -2, null, -1], -1))


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
