// Description

// Given a non-empty, singly linked list with the head nodehead, return a middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Complete the functionbelow, no need to take any input.

// Input
// This is a function complete problem.
// Refer to sample input for understanding
// The first line contains the number of nodes (t)
// Next t lines contains the node of the linked list
// t <= 1000
// list[i] <= 1000

//input                         //output
//  3                            2
//  1
//  2
//  3


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    let first_pointer = head;
    let second_pointer = head;
    
    while(second_pointer !== null && second_pointer.next!==null){
        first_pointer = first_pointer.next;
        second_pointer = second_pointer.next.next;
    }
    return first_pointer.data;
};

