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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let nums = [];
    const DFS = (node) => {
        node.left && DFS(node.left);
        nums.push(node.val);
        node.right && DFS(node.right);
    };
    DFS(root);
    return nums.at(k - 1);
};