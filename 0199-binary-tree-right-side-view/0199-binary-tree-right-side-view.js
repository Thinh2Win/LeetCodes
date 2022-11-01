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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    let answer = [root.val];
    let q = [root];
    while (q.length) {
        let level = q.length; 
        let hasPushed = false;
        for (let i = 0; i < level; i++) {
            let node = q.shift();
            if (node.right) {
                q.push(node.right);
                if (!hasPushed) {
                    answer.push(node.right.val);
                    hasPushed = true;
                }
            } else if (node.left && !hasPushed) {
                answer.push(node.left.val);
                hasPushed = true;
            }
            node.left ? q.push(node.left) : null;
        }
    }
    return answer;
};