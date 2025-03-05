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
 * @return {number}
 */
var maxLevelSum = function(root) {
    // BFS
    // keep track of overall max 
    // keep track of level 
    // find the sum of each level with BFS and if the max is greatest set the level 
    let max = -Infinity;
    let answer = 1;
    let level = 1;
    let queue = [root];
    while (queue.length) {
        let children = [];
        let currSum = 0;
        for (let node of queue) {
            node.left && children.push(node.left)
            node.right && children.push(node.right)
            currSum += node.val;
        }
        if (currSum > max) {
            answer = level;
            max = currSum;
        }
        level += 1;
        queue = children;
    }
    return answer;
};