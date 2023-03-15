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
var isValidBST = function(root) {
    if (!root) return false;
    let valid = true;
    const DFS = (node, leftMin, rightMax) => {
        if (node.val >= leftMin || node.val <= rightMax ) {
            valid = false;
            return;
        }
        node.left && DFS(node.left, Math.min(leftMin, node.val), rightMax);
        node.right && DFS(node.right, leftMin, Math.max(rightMax, node.val));
    };
    DFS(root, Infinity, -Infinity);
    return valid;
};