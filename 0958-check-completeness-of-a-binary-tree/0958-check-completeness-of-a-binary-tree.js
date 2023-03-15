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
var isCompleteTree = function(root) {
    let levels = [];
    let q = [root];
    while (q.length) {
        let level = [];
        for (let i = q.length - 1; i >= 0; i--) {
            let node = q.shift();
            node.left ? (q.push(node.left), level.push(node.left.val)) : level.push(null);
            node.right ? (q.push(node.right), level.push(node.right.val)) : level.push(null);
        }
        levels.push(level);
    };
    let values = levels.flat();
    let seenNull = false;
    for (let j = 0; j < values.length; j++) {
        if (values[j] === null) seenNull = true;
        if (seenNull && values[j]) return false;
    }
    return true;
};