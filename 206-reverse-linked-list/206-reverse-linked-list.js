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
     if (head == null || head.next == null){
        return head;
    }
    var currentHead = null;
   let values = [];
  var loop = (node) => {
    if (node.next === null) {
      currentHead = new ListNode(node.val, null);
      return;
    }
    values.unshift(node.val);
    loop(node.next);
  };
  loop(head);
    let currentNode = null;
    values.forEach(number => {
       if (currentHead.next === null) {
           currentHead.next = new ListNode(number, null);
           currentNode = currentHead.next;
       } else if (currentNode.next === null) {
           currentNode.next = new ListNode(number, null);
           currentNode = currentNode.next;
       }
    });
  return currentHead;
   
};