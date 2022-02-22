// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:


// The test cases are generated such that there are no cycles anywhere in the entire linked structure.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    
    
    let l1 = 0;
    let l2 = 0;
    let current1 = headA;
    let current2 = headB;
    
    while(current1){
        l1++;
        current1 = current1.next;
    }
    while(current2){
        l2++;
        current2 = current2.next;
    }
    
    let diff = Math.abs(l1-l2);
    let p = headA;
    let q = headB;
    
    if(l1 === l2 && l1 === 1){
        if(p === q){
            return p;
        }
    }
    else if(l1 === l2){
       if(p === q){
           return p;
       }
    }
    
    
    else if(l1 === l2){
        while(p !== null && q !== null){
            p = p.next;
            q = q.next;
        
            if(p === q){
            return p;
            }
        }
    }
    
    else if(l1 > l2){
        for(let i=0; i<diff && p !== null; i++){
            p = p.next;
        }
    }
    else if(l1 < l2){
        for(let i=0; i<diff && p !== null; i++){
            q = q.next;
        }
    }
    
    
    while(p !== null && q !== null){
        p = p.next;
        q = q.next;
        
        if(p === q){
            return p;
        }
    }
    
   
    return null;
    
};