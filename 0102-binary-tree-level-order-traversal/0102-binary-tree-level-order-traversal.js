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
        let length = q.length;
        let level = [];
        for (let i = 0; i < length; i++) {
            let currentNode = q.shift();
            level.push(currentNode.val);
            currentNode.left ? q.push(currentNode.left) : null;
            currentNode.right ? q.push(currentNode.right) : null;
        }
        answer.push(level);
    }
    return answer;
};