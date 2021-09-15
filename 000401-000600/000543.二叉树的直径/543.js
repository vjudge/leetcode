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
// 方法一：用时 68ms
// 执行用时超过了 98%
// 消耗内存超过了 64%
var diameterOfBinaryTree = function(root) {
  let result = 1
  depth(root)

  function depth (rootNode) {
    if (!rootNode) { return 0 }

    let ldeep = depth(rootNode.left)
    let rdeep = depth(rootNode.right)
    result = Math.max(result, ldeep + rdeep + 1)
    return Math.max(ldeep, rdeep) + 1
  }
  return (result - 1)
};
