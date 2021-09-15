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
 * @return {number[]}
 */
// 方法一：用时 64ms
// 执行用时超过了 92%
// 消耗内存超过了 71%
var inorderTraversal = function(root) {
  let result = []
  LDR(root)

  function LDR (node) {
    if (!node) {
      return
    }
    LDR(node.left)
    result.push(node.val)
    LDR(node.right)
  }
  return result
};

// // 方法二：用时 64ms
// // 执行用时超过了 92%
// // 消耗内存超过了 71%
// var inorderTraversal = function(root) {
//   let stacks = [root]
//   let result = []
//   while (stacks.length) {
//     let curnode = stacks.pop()
//     if (curnode.left) {
//       stacks.push(curnode.left)
//       continue
//     }
//     result.push(curnode.val)
//     if (curnode.right) {
//       stacks.push(curnode.right)
//     }
//   }
//   return result
// }


function main(trvals) {
  let root = genTree(trvals)
  return inorderTraversal(root)
}

console.log(main([1, null, 2, 3]))


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
