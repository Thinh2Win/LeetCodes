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
    let numbers = [];
    const DFS = (currentNode) => {
        numbers.push(currentNode.val);
        currentNode.left && DFS(currentNode.left);
        currentNode.right && DFS(currentNode.right);
    }
    DFS(root);
    numbers.sort((a, b) => a - b);
    return numbers[k - 1];
};