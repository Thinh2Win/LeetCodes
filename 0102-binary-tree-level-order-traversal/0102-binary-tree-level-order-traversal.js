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
var levelOrder = function(root) {
    if (!root) return [];
    let answer = [];
    let q = [root];
    while (q.length) {
        let level = [];
        for (let i = q.length; i > 0; i--) {
            let node = q.shift();
            level.push(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        answer.push(level);
    }
    return answer;
};