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
    let pPath = [];
    let qPath = [];
    const BS = (node, path, target) => {
        if (node === target) {
            target === p && pPath.push(...path, node);
            target === q && qPath.push(...path, node);
            return;
        }
        if (target.val > node.val) {
            BS(node.right, [...path, node], target);
        } else if (target.val < node.val) {
            BS(node.left, [...path, node], target);
        }
    }
    BS(root, [], p);
    BS(root, [], q);
    let [shortest, longest] = [pPath, qPath].sort((a, b) => a.length - b.length);
    for (let i = longest.length - 1; i >= 0; i--) {
        for (let j = shortest.length - 1; j >= 0; j--) {
            if (longest[i] === shortest[j]) return longest[i];
        }
    }
};