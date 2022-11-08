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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if (!root) return null;
    let inOrder = [];
    const DFS = (currentNode) => {
        currentNode.left && DFS(currentNode.left);
        inOrder.push(currentNode);
        currentNode.right && DFS(currentNode.right);
    }
    DFS(root);
    for (let i = 0; i < inOrder.length; i++) {
        if (inOrder[i].val === p.val && i + 1 < inOrder.length) {
            return inOrder[i + 1];
        }
    }
    return null;
};