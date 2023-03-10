/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var list = [];
var Solution = function(head) {
    if (!head) return null;
    if (list.length) list = [];
    let curr = head;
    while (curr) {
        list.push(curr.val);
        curr = curr.next;
    };
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let random = Math.random() * list.length | 0;
    return list[random];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */