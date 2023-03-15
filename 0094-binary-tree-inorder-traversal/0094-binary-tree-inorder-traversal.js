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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return [];
    let answer = [];
    const DFS = (node) => {
        node.left && DFS(node.left);
        answer.push(node.val);
        node.right && DFS(node.right);
    };
    DFS(root);
    return answer;
};