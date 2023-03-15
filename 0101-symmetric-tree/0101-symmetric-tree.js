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
var isSymmetric = function(root) {
    if (!root) return true;
    const isSame = (leftNode, rightNode) => {
        if (!leftNode && !rightNode) {
            return true;
        } 
        if (leftNode && !rightNode || !leftNode && rightNode) {
            return false;
        }
        if (leftNode && rightNode) {
            if (leftNode.val !== rightNode.val) return false;
            return (isSame(leftNode.left, rightNode.right) && isSame(leftNode.right, rightNode.left))
        }
        return true;
    }
    return isSame(root.left, root.right);
};