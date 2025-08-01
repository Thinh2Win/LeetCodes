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
var verticalOrder = function(root) {
    /*
        - Traverse tree with BFS 
        - keep track of direction via number
        - root will be 0 and be mapped to an array
        - everytime we traverse left or right we subtract or add 1
        - then we grab the associated array and push the node val inside 
        - construct an array with the values of the map and return 
    */
    if (!root) return [];
    const map = {};

    const queue = [[root, 0]]

    while (queue.length) {
        let end = queue.length;
        for (let i = 0; i < end; i++) {
            const [node, direction] = queue.shift();
            if (!map[direction]) map[direction] = [];
            map[direction].push(node.val);
            node.left && queue.push([node.left, direction - 1]);
            node.right && queue.push([node.right, direction + 1]);
        }
    }
    let answer = new MinPriorityQueue(duple => duple[0]);
    for (let key in map) {
        answer.enqueue([+key, map[key]])
    }
    return Array.from(answer).map(duple => duple[1]);
};