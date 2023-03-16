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
var maxPathSum = function(root) {
    if (!root) return null;
    let max = -Infinity;
    const DFS = (node) => {
        let left = node.left && DFS(node.left) || -Infinity;
        let right = node.right && DFS(node.right) || -Infinity;
        max = Math.max(max, node.val + left + right, node.val + right, node.val + left, left, right, node.val);
        return Math.max(node.val + left, node.val + right, node.val);
    }
    DFS(root);
    return max;
};