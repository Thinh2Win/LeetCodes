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
var isBalanced = function(root) {
    const loop = (currentNode) => {
        if (!currentNode) {
            return 0;
        }
        let leftDepth = loop(currentNode.left);
        let rightDepth = loop(currentNode.right);
        if (leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        }  
        return Math.max(leftDepth, rightDepth) + 1;
    }     
   return loop(root) === -1 ? false : true;
    
};