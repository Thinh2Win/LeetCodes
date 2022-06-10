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
var diameterOfBinaryTree = function(root) {
    let max = 0;
    const loop = (currentNode) => {
        if (!currentNode) {
            return 0;
        }
        let left = loop(currentNode.left);
        let right = loop(currentNode.right);
        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    loop(root);
    return max;
};