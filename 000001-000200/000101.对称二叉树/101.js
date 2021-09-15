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
 * @return {boolean}
 */
// 方法一：用时 60ms
// 执行用时超过了 100%
// 消耗内存超过了 68%
var isSymmetric = function(root) {
  if (!root || (!root.left && !root.right)) {
    return true
  }
  let leftq = [root.left || {}]
  let rightq = [root.right || {}]
  while (leftq.length && rightq.length) {
    let curln = leftq.shift()
    let currn = rightq.shift()
    if (curln.val != currn.val) {
      return false
    }
    if (curln.left) {
      if (!currn.right) {
        return false
      }
      leftq.push(curln.left)
      rightq.push(currn.right)
    } else if (currn.right) {
      return false
    }
    if (curln.right) {
      if (!currn.left) {
        return false
      }
      leftq.push(curln.right)
      rightq.push(currn.left)
    } else if (currn.left) {
      return false
    }
  }
  if (leftq.length || rightq.length) {
    return false
  }
  return true
};

function main (trvals) {
  let root = genTree(trvals)
  console.log('root: ', root)
  return isSymmetric(root)
}

console.log(main([1, 0]))
// console.log(main([1, 2, 2, 3, 4, 4, 3]))
// console.log(main([1, 2, 2, null, 3, null, 3]))


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
