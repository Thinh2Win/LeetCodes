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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    
    let hasTarget = false; 
    const DFS = (currentNode, currentSum) => {
        if (!currentNode) {
            return;
        }
        currentSum += currentNode.val;
        if (!currentNode.left && !currentNode.right && currentSum === targetSum) {
            return hasTarget = true;
        }
        DFS(currentNode.left, currentSum);
        DFS(currentNode.right, currentSum);
    };
    DFS(root, 0);
    return hasTarget;
};