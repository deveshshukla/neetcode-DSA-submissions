/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            let nextTemp = current.next; // 1. Save the next node
            current.next = prev;         // 2. Reverse the pointer
            prev = current;              // 3. Move prev forward
            current = nextTemp;          // 4. Move current forward
        }

        return prev; // New head of the reversed list
    }
}
