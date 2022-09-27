/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let firstPath = null;
    let secondPath = null; 
    const DFS = (currentNode, container) => {
        container.push(currentNode);
        if (currentNode === p) {
            firstPath = container.slice();
        }
        if (currentNode === q) {
            secondPath = container.slice();
        }
        currentNode.left ? DFS(currentNode.left, container) : null;
        currentNode.right ? DFS(currentNode.right, container) : null;
        container.pop();
    }
    DFS(root, []);
    let map = {};
    for (let i = 0; i < firstPath.length; i++) {
        if (map[firstPath[i].val] === undefined) {
            map[firstPath[i].val] = 1;
        }
    }
    console.log(map)
    for (let j = secondPath.length - 1; j >= 0; j--) {
        if (map[secondPath[j].val] === 1) {
            return secondPath[j];
        } 
    }
};