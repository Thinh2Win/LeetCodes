/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    /*
        DFS to find target 
        then BFS with target k times 
        have a set to track visited nodes 
        push left, right and parent of target into queue if we have not yet already  
    */
    if (!root) return root;
    let curr = root;
    findTarget(curr, target, null); // connect parents to target
    let visited = new Set();
    visited.add(target);
    let queue = [target];
    for (let i = 0; i < k; i++) {
        let end = queue.length;
        for (let j = 0; j < end; j++) {
            let node = queue.shift();
            if (node.left && !visited.has(node.left)) {
                visited.add(node.left);
                queue.push(node.left);
            }
            if (node.right && !visited.has(node.right)) {
                visited.add(node.right);
                queue.push(node.right);
            }
            if (node.parent && !visited.has(node.parent)) {
                visited.add(node.parent);
                queue.push(node.parent);
            }
        }
    }
    return queue.map(node => node.val);
};

function findTarget(node, target, parent) {
    node.parent = parent;
    if (node === target) return;
    node.left && findTarget(node.left, target, node);
    node.right && findTarget(node.right, target, node);
}