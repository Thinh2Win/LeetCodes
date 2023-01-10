/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let tree1 = [];
    let tree2 = [];
    const DFS = (node, tree) => {
        tree.push(node.val);
        node.left ? DFS(node.left, tree) : tree.push(null);
        node.right ? DFS(node.right, tree) : tree.push(null);
    }
    p && DFS(p, tree1);
    q && DFS(q, tree2);
    return JSON.stringify(tree1) === JSON.stringify(tree2)
};