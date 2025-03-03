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
    if (!head) return head;
    // create a pointer for odd links and a pointer for even links 
    // odd pointer will be head 
    let odd = head;
    let evenHead = new ListNode(0);
    let even = evenHead; 
    let prev = head;
    let currNode = head.next;
    let isOdd = false;
    // keep track of even or odd link while traversing linked list 
    while (currNode) {
        if (isOdd) {
            odd.next = currNode;
            odd = odd.next;
           
        } else { // its even
            even.next = currNode;
            even = even.next;
        }
        prev.next = null;
        prev = currNode;
        currNode = currNode.next
        isOdd = !isOdd;
    }
    // as we traverse we attach even links to even pointer and odd links to odd pointer
    // connect odd list and even list after traversal 
    odd.next = evenHead.next;
    // return head 
    return head;

};