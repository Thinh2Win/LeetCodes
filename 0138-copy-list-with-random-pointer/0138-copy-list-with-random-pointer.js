/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // create a map to store node and its copy 
    // traverse the linked list
    // set the current node to its copy 
    // set the current nodes pointer (next) to the nexts copy 
    // continue traversing 
    let map = new Map();
    let node = head;
    while (node) {
        map.set(node, new Node(node.val));
        node = node.next;
    };
    node = head;
    while (node) {
        map.get(node).next = map.get(node.next) || null;
        map.get(node).random = map.get(node.random) || null;
        node = node.next;
    }
    return map.get(head)
};