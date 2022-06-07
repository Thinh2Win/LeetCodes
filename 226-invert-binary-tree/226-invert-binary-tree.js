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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return root;
    }
    const loop = (currentNode) => {
        if (!currentNode.left && !currentNode.right) {
            return;
        }
        if (currentNode.left && !currentNode.right) {
            let holder = currentNode.left;
            currentNode.left = null;
            currentNode.right = holder;
        } else if (!currentNode.left && currentNode.right) {
            let holder = currentNode.right;
            currentNode.right = null;
            currentNode.left = holder;
        } else {
            [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left]; 
        }
        if (currentNode.left) {
            loop(currentNode.left);            
        } 
        if (currentNode.right) {
            loop(currentNode.right);                
        }
    }

        loop(root);
        return root;
};