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
var diameterOfBinaryTree = function(root) {
    let max = 0;
    const DFS = (node) => {
        if (!node.left && !node.right) {
            return 1;
        }
        let left = (node.left && DFS(node.left)) || 0;
        let right = (node.right && DFS(node.right)) || 0;
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    };
    DFS(root);
    return max;
};