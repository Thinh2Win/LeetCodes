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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = {};
    let answer = [];
    const DFS = (node) => {
        if (!node) return '#';
        let subtree = `${node.val}.${DFS(node.left)}.${DFS(node.right)}`;
        map[subtree] ? map[subtree] += 1 : map[subtree] = 1;
        if (map[subtree] === 2) {
            answer.push(node);
        };
        return subtree;        
    };
    DFS(root);
    return answer;
};