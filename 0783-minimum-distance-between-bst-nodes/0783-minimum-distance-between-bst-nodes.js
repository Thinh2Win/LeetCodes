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
var minDiffInBST = function(root) {
   let nums = [];
    const DFS = (node) => {
        node.left && DFS(node.left);
        nums.push(node.val);
        node.right && DFS(node.right);
    }
    DFS(root);
    let min = Infinity;
    for (let i = 0; i < nums.length - 1; i++) {
        min = Math.min(nums[i + 1] - nums[i], min);
    }
    return min;
};