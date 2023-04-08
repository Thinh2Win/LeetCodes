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
var isBalanced = function(root) {
    if (!root) return true;
    let check = true;
    const DFS = (node) => {
        if (!check) return;
        if (!node.left && !node.right) {
            return 1;
        }
        let left = (node.left && DFS(node.left)) || 0; 
        let right = (node.right && DFS(node.right)) || 0; 
        if (Math.abs(left - right) >= 2) {
            check = false;
        }
        return Math.max(left, right) + 1;
    }
    DFS(root);
    return check;
};