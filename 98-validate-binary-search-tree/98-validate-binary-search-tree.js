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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const DFS = (currentNode, min, max) => {
        if (currentNode === null) return true;
        if (currentNode.val <= min || currentNode.val >= max) return false;
        const leftValid = DFS(currentNode.left, min, currentNode.val);
        return leftValid && DFS(currentNode.right, currentNode.val, max);
    }
    return DFS(root, -Infinity, Infinity);
};