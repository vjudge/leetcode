/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 方法一：用时 92ms
// 执行用时超过了 70%
// 消耗内存超过了 46%
var lowestCommonAncestor = function(root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right
    } else {
      return root
    }
  }
  return null
};

// 方法二：用时 80ms
// 执行用时超过了 97%
// 消耗内存超过了 41%
var lowestCommonAncestor = function(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
};
