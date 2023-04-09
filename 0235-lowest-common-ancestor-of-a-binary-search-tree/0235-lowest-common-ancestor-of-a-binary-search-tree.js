/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
   const loop = (currentNode) => {
       if (p.val < currentNode.val && q.val < currentNode.val) {
           return loop(currentNode.left);
       }
       if (p.val > currentNode.val && q.val > currentNode.val) {
           return loop(currentNode.right);
       }
       return currentNode;
   }
    return loop(root);
    
};