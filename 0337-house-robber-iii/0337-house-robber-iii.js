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
var rob = function(root) {
    const DFS = (node) => {
        if (!node) return [0,0];
        let [robL, skipL] = DFS(node.left);
        let [robR, skipR] = DFS(node.right);

        let robNode = node.val + skipL + skipR;
        let skipNode = Math.max(robL, skipL) + Math.max(robR, skipR);
        return [robNode, skipNode];
    }
    let [robRoot, skipRoot] = DFS(root);
    return Math.max(robRoot, skipRoot);
};