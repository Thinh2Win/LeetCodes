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
var maxDepth = function(root) {
    if (!root) return null;
    let max = 0;
    const DFS = (node, level) => {
        if (!node.right && !node.left) {
            max = Math.max(max, level);
        }
        node.left && DFS(node.left, level + 1)
        node.right && DFS(node.right, level + 1)
    };
    DFS(root, 1);
    return max;
};