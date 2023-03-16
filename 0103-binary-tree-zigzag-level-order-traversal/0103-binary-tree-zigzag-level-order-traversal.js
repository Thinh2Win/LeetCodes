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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let level = 1;
    let q = [root];
    let answer = [];
    while (q.length) {
        let container = [];
        for (let i = q.length; i > 0; i--) {
            let node = q.shift();
            level % 2 === 1 ? container.push(node.val) : container.unshift(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        answer.push(container);
        level += 1;
    }
    return answer;
};