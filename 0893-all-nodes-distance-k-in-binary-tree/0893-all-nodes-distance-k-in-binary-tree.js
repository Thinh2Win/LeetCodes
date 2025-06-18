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
        BFS 
        - find target node using DFS 
            - make sure to track parent when DFS to add parent to node 
        - once we find target node place node in queue
        - note: queue should hold [node, prevNode] to avoid revisiting nodes 
        - keep track of dist 
        - pop from queue 
            - push nodes left, right, and parent node if they exist and are not prevNode into queue 
            - if our dist === k, return queue 
    */
    
    connectParents(root);
    let queue = [[target, -1]]; // currNode, prevNode
    let dist = 0;

    while (queue.length) {
        let nextRound = [];
        let end = queue.length;
        if (dist === k) return queue.map(node => node[0].val);
        for (let i = 0; i < end; i++) {
            let [currNode, prevNode] = queue.pop();
            if (currNode.left && prevNode !== currNode.left) nextRound.push([currNode.left, currNode]);
            if (currNode.right && prevNode !== currNode.right) nextRound.push([currNode.right, currNode]);
            if (currNode.parent && prevNode !== currNode.parent) nextRound.push([currNode.parent, currNode]);
        }

        dist += 1;
        queue = nextRound;
    }
    return [];
};

function connectParents(root) {
    let tNode = null;
    
    const DFS = (node, parent) => {
        node.parent = parent;
        node.left && DFS(node.left, node);
        node.right && DFS(node.right, node);
    };
    DFS(root, null);
}