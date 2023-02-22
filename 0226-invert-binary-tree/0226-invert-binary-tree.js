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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    let q = [root];
    while (q.length) {
        let node = q.shift();
        let left = node.left || null;
        let right = node.right || null;
        node.left && q.push(node.left);
        node.right && q.push(node.right);
        node.right = left;
        node.left = right;
    };
    return root;
};