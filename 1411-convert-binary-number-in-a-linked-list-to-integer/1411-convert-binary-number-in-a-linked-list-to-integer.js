/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    const nums = [];
    let curr = head;
    while (curr) {
        nums.unshift(curr.val);
        curr = curr.next;
    };
    return nums.reduce((acc, num, idx) => acc += num * 2**idx, 0)
};