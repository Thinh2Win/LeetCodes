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
    let validTree = true; 
    const DFS = (currentNode, min, max) => {
        console.log(currentNode.val, min, currentNode.val < min)
        if (currentNode.val <= min || currentNode.val >= max ) {
            validTree = false;
            return;
        }
        currentNode.left ? DFS(currentNode.left, min, currentNode.val) : null;
        currentNode.right ? DFS(currentNode.right, currentNode.val, max) : null;
    }
    DFS(root, -Infinity, Infinity);
    return validTree; 
};