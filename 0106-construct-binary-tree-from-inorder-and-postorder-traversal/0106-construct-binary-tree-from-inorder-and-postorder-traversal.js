/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
        if (!inorder.length) return null;
        let val = postorder.pop();
        let idx = inorder.indexOf(val);
        let node = new TreeNode(val);
        node.right = buildTree(inorder.slice(idx + 1), postorder);
        node.left = buildTree(inorder.slice(0, idx), postorder);
        return node;
};