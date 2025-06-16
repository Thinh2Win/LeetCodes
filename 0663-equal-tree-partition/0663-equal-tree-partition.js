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
var checkEqualTree = function(root) {
    const DFS = (node, map) => {
        if (!node) return 0;
        let sum = node.val + DFS(node.left, map) + DFS(node.right, map);
        map[sum] = true;
        return sum;
    }
    let map = {};
    let rootSum = root.val + DFS(root.left, map) + DFS(root.right, map);

    return rootSum % 2 === 0 && map[rootSum / 2] !== undefined;
};
