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
    const DFS = (curr, sum) => {
        sum += curr.val;
        if (sum === targetSum && !curr.left && !curr.right) {
            return true;
        }
        if (sum !== targetSum && !curr.left && !curr.right) {
            return false;
        }
        let left = curr.left ? DFS(curr.left, sum) : false;
        let right = curr.right ? DFS(curr.right, sum) : false;
        return left || right;
    }
    return DFS(root, 0);
};