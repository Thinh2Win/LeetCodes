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
    let max = -Infinity;
    const DFS = (node, depth) => {
        if (!node.left && !node.right) {
            max = Math.max(max, depth);    
        }
        node.left && DFS(node.left, depth + 1);
        node.right && DFS(node.right, depth + 1);
    }
    DFS(root, 1)
    return max;
};