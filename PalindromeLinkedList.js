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
    let pointer = head;
    let quickPointer = head;

    // Finds the middle
    while(quickPointer && quickPointer.next){
        pointer = pointer.next;
        quickPointer = quickPointer.next.next;
    }

    // Reverses the rightSide
    let prevNode = null;
    let currNode = pointer;
    while (currNode) {
        let nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    // Compare sides
    let leftSide = head;
    let rightSide = prevNode;

    while(rightSide) {
        if(leftSide.val !== rightSide.val){
            return false;
        }
        leftSide = leftSide.next;
        rightSide = rightSide.next;
    }

    return true;

};