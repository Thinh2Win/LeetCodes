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
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode(0, head);
    let count = 0;
    let prev = dummy;
    let curr = head;
    let next = head.next;
    while (next) {
        if (count % 2 === 0) {
            let holder = next.next;
            // prev.next points to next 
            // next points to current 
            // current points to next.next 
            prev.next = next;
            next.next = curr;
            curr.next = holder;
            // swap prev and curr pointers back 
            let holdoor = curr;
            curr = next;
            next = holdoor;
        }
         // move pointers
            prev = prev.next;
            curr = curr.next;
            next = next.next;
            count += 1;
    }
    return dummy.next;
};