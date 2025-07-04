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
var largestBSTSubtree = function(root) {
    let answer = 0;
    if (!root) return answer;
    const DFS = (node) => {
        answer = Math.max(answer, BST(node, -Infinity, Infinity));
        node.left && DFS(node.left);
        node.right && DFS(node.right);
    }
    DFS(root);
    return answer;
};

function BST(node, min, max) {
    if (!node) return -1;
    if (node.val <= min || node.val >= max) return 0;
    let left = BST(node.left, min, node.val);
    let right = BST(node.right, node.val, max);

    return left && right ? 1 + (left > 0) * left + (right > 0) * right : 0
}