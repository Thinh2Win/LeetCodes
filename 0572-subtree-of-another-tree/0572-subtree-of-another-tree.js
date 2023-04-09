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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let check = false;
    const DFS = (node) => {
        if (check) return;
        if (node.val === subRoot.val) {
            check = sameTree(node, subRoot);
        }
        node.left && DFS(node.left);
        node.right && DFS(node.right);
    }
    DFS(root);
    return check;
};

function sameTree(p, q) {
    let check = true;
    const DFS = (p, q) => {
        if (!check) return;
        if (p.val !== q.val || p.left?.val !== q.left?.val || p.right?.val !== q.right?.val) {
            check = false;
            return;
        }
        p.left && DFS(p.left, q.left);
        p.right && DFS(p.right, q.right);
    }
    DFS(p, q);
    return check;
}