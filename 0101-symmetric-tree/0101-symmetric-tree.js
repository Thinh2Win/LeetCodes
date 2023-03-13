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
var isSymmetric = function(root) {
    let q = [root];
    while (q.length) {
        let level = [];
        for (let i = q.length; i > 0; i--) {
            let node = q.shift();
            if (node.left) {
                level.push(node.left.val);
                q.push(node.left);
            } else {
                level.push(null);
            }
            if (node.right) {
                level.push(node.right.val);
                q.push(node.right);
            } else {
                level.push(null);
            }
        }
        let mp = level.length / 2;
        let left = level.slice(0, mp);
        let right = level.slice(mp);
        if (JSON.stringify(left) !== JSON.stringify(right.reverse())) return false;
    }
    return true;
};