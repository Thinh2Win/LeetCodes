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
var maxPathSum = function(root) {
    let maxSum = -Infinity; 
    const DFS = (currentNode) => {
        let leftMax = currentNode.left ? DFS(currentNode.left) : 0;
        let rightMax = currentNode.right ? DFS(currentNode.right) : 0;
        maxSum = Math.max(maxSum, leftMax + currentNode.val, rightMax + currentNode.val, leftMax + rightMax + currentNode.val, currentNode.val);
        return Math.max(leftMax + currentNode.val, rightMax + currentNode.val, currentNode.val);
    }
    // maxSum = Math.max(DFS(root), maxSum);
    DFS(root)
    return maxSum;
};