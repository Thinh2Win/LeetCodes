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
var oddEvenList = function(head) {
    if (!head) return null;
    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead;
    let even = evenHead;
    while (even) {
        odd.next = odd.next?.next;   
        if (odd.next) odd = odd.next;
        
        if (even.next) even.next = even.next?.next;
        even = even.next;
    };
    odd.next = evenHead;
    return oddHead;
};