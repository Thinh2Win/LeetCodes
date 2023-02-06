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
var reverseList = function(head) {
    if (!head) return null;
    let nums = [];
    let start = head;
    while (start) {
        nums.push(start.val);
        start = start.next;
    }
    let rList = new ListNode(nums.at(-1));
    let link = rList;
    for (let i = nums.length - 2; i >= 0; i--) {
        link.next = new ListNode(nums[i]);
        link = link.next; 
    }
    return rList;
};