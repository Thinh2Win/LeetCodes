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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    /*
        Min Heap 
        - use a min heap to track duple containing number and difference from target 
        - return first k values 
        - too many nodes, will probably get overflow error 

        binary search for lowest diff
        - starting at root, abs val of diff with target
        - 
    */
    if (!root) return [];

    const minQ = new MinPriorityQueue(duple => duple[0]); // [diff, num]

    traverse(minQ, root, target);
    const answer = [];
    for (let i = 0; i < k; i++) {
        answer.push(minQ.dequeue()[1]);
    }
    return answer;
};

function traverse(minQ, node, target) {
    let diff = Math.abs(target - node.val);
    minQ.enqueue([diff, node.val]);
    node.left && traverse(minQ, node.left, target);
    node.right && traverse(minQ, node.right, target);
}