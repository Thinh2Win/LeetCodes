/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let nums = [];
    let curr = head;
    while (curr) {
        nums.push(curr.val);
        curr = curr.next;
    }
    return nums.join('') === nums.reverse().join('');
};