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
     * @return {boolean}
     */
    hasCycle(head) {
        let curr = head 
        let newSet = new Set()

        while(curr !== null){
            newSet.add(curr)
            curr = curr.next
            console.log(newSet, 'this is for the new set')
            if(curr !== null){
                    for(let value of newSet){
                    console.log(value, curr.val)
                    if(value === curr){
                        return true
                    }
                }
            }
        }
        return false
    }
}
