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
    let isValid = true;
    const DFS = (node, leftMin, rightMax) => {
        if (!isValid) return;
        if (node.val >= leftMin || node.val <= rightMax) {
            isValid = false;
            return;
        }
        node.left && DFS(node.left, Math.min(leftMin, node.val), rightMax);
        node.right && DFS(node.right, leftMin, Math.max(rightMax, node.val));
    }
    DFS(root, Infinity, -Infinity);
    return isValid;
};