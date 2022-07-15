// Description

// You are given the head of the linked list, you need to remove the maximum element in the linked list and return the head of the changed linked list.

// Note
// You don’t need to take input/output. Just implement the given function.
// If the linked list is empty, return a NULL value
// If there is more than one maximum element remove the last occurring element in the linked list.

//input                         output
// 5                               1 2 3 4 5
// 1 2 3 4 5                       1 2 3 4
//                                 1 2 3
//                                 1 2
//                                 1
//                                 -1






const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMaximum = function (head) {
    let prev_largest = null;
    let prev = head;
    let largest = head;
    let current = head.next
    
    while(current !== null ){
        if(largest.data < current.data){
            prev_largest = prev;
            largest = current;
        }
        prev = current;
        current = current.next;
    }
    
    
    if(head === largest){
        head = head.next;
    }
    else{
        prev_largest.next = largest.next;
    }
    
    
    return head;
};
