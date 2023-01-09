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
var preorderTraversal = function(root) {
  let answer = [];
    if (!root) return answer;
    const DFS = (node) => {
        answer.push(node.val);
        node.left && DFS(node.left);
        node.right && DFS(node.right);
    }
    DFS(root);
    return answer;
};