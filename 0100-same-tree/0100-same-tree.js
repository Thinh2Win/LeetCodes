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
    if (!p && !q) return true;
    if (!p && q || p && !q) return false;
    let check = true;
    const DFS = (p, q) => {
        if (!check) return;
        if (p.left?.val !== q.left?.val || p.right?.val !== q.right?.val || p?.val !== q?.val) {
            check = false;
            return;
        }
        p.left && DFS(p.left, q.left);
        p.right && DFS(p.right, q.right);
    };
    DFS(p, q);
    return check;
};