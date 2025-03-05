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
var longestZigZag = function(root) {
    if (!root) return 0;
    // DFS 
    // when we traverse we keep track of if we came from right or left of parent 
    let max = 0;
    const DFS = (node, direction, currCount) => {
    // when recursively calling DFS we reset count if we came from right but are going left and vice versa 
        if (node.left) {
            // if we came from left and are going left we reset when going left
            // else we came from right and can increment currCount
            direction === 'L' ? DFS(node.left, 'L', 1) : DFS(node.left, 'L', currCount + 1);
        }
        if (node.right) {
            direction === 'R' ? DFS(node.right, 'R', 1) : DFS(node.right, 'R', currCount + 1);
        }
    // after recurseive DFS calls we check the currCount to our max count 
        max = Math.max(max, currCount);
    }
    root.left && DFS(root.left, 'L', 1)
    root.right && DFS(root.right, 'R', 1)
    // return max count 
    return max;
};