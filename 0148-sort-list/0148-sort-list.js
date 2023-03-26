/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head) return null;
    let nodes = [];
    let curr = head;
    while (curr) {
        nodes.push(curr.val);
        curr = curr.next;
    }
    nodes.sort((a, b) => a - b);
    let answer = new ListNode(nodes[0]);
    let next = answer;
    for (let i = 1; i < nodes.length; i++) {
        next.next = new ListNode(nodes[i]);
        next = next.next;
    };
    return answer;
};