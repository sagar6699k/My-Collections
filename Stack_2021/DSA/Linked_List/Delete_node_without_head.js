// Description

// You are given a pointer/ reference to the node which is to be deleted from the linked list of n nodes. The task is to delete the node. Pointer/ reference to the head node is not given.
// Note: No head reference is given to you.
// You only need tocompletethe functiondeleteNodethat takes the reference to thenode that needs to be deleted. The printing is doneautomatically by thedriver code.

// Input
// This is a function complete problem.
// Refer to sample input for understanding
// The first line contains the number of nodes in the linked list (t)
// Next t lines contains the nodes of the linked list
// Next line contains the node to be deleted
// t <= 1000
// list[i] <= 1000

//input                         //output
// 3                            1 3
// 1
// 2
// 3
// 2



const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
    node.data = node.next.data;
    node.next = node.next.next;
    return;
}
