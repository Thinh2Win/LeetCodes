/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null
    let val = preorder.shift();
    let node = new TreeNode(val);
    let idx = inorder.indexOf(val);
    node.left = buildTree(preorder, inorder.slice(0, idx));
    node.right = buildTree(preorder, inorder.slice(idx + 1));
    return node;
};