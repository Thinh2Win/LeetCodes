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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) return root;

    let node = root;
    while (node) {
        if (node.val === val) return node;

        if (node.val < val) {
            node = node.right;
        } else if (node.val > val) {
            node = node.left
        } else {
            node = null
        }
    }
    return null;
};