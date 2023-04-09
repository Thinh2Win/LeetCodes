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
var goodNodes = function(root) {
    // DFS 
    // keep track of the max val parent as we go down 
    // keep a count 
    // if the current node is greater than its parent, 
    // increment count, set new max to current node 
    let count = 0;
    const DFS = (node, parent) => {
        if (node.val >= parent) count += 1;
        node.left && DFS(node.left, Math.max(node.val, parent));
        node.right && DFS(node.right, Math.max(node.val, parent));
    };
    DFS(root, root.val);
    return count;
};