/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    let dummy = new ListNode(1, head);
    let curr = head;
    let prev = dummy;
    while (curr) {
        // move forward m 
        for (let i = 0; i < m; i++) {
            if (!curr) break;
            prev = curr;
            curr = curr.next;
        }
        // move forward n
        for (let i = 0; i < n; i++) {
            if (!curr) break
            curr = curr.next;
        }
        // attach prev pointer to curr
        prev.next = curr;
    }
    return dummy.next;
};