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
        if (!inorder.length) return null;
        let root = new TreeNode(preorder[0]);
        let rootIdx = inorder.indexOf(preorder[0]);
        let inorderLeft = inorder.slice(0, rootIdx);
        let inorderRight = inorder.slice(rootIdx + 1);
        let preorderLeft = preorder.slice(1, inorderLeft.length + 1);
        let preorderRight = preorder.slice(inorderLeft.length + 1);
        if (inorderLeft.length ) root.left = buildTree(preorderLeft, inorderLeft);
        if (inorderRight.length) root.right = buildTree(preorderRight, inorderRight);
        return root;

};