/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    let mp = Math.floor(nums.length / 2);
    let val = nums[mp];
    let node = new TreeNode(val);
    node.left = sortedArrayToBST(nums.slice(0, mp));
    node.right = sortedArrayToBST(nums.slice(mp + 1));
    return node;
};