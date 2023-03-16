/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    let q = [root];
    while (q.length) {
        let level = [];
        for (let i = q.length; i > 0; i--) {
            let node = q.shift();
            level.push(node);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        };
        level.forEach((node, idx) => node.next = level[idx + 1] || null);
    }
    return root;
};