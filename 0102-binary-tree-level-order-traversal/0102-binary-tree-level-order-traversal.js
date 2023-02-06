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
        let container = [];
        let level = q.length; 
        for (let i = 0; i < level; i++) {
            let node = q.shift();
            container.push(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        answer.push(container);
    }
    return answer;
};