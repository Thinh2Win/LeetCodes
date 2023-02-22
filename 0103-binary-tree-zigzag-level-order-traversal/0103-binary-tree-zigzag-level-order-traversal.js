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
    let level = 0;
    let q = [root];
    let answer = [];
    while (q.length) {
        let i = q.length;
        let container = [];
        for (let j = i; j > 0; j--) {
            let node = q.shift();
            node.left && q.push(node.left);
            node.right && q.push(node.right);
            container.push(node.val);
        }
        level % 2 === 0 && answer.push(container);
        level % 2 === 1 && answer.push(container.reverse());
        level += 1;
    };
    return answer;
};