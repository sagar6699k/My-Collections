
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let pointer1 = head;
    let pointer2 = head;
    
    while(pointer1.next !== null && pointer2.next !== null && pointer2.next.next !== null){
        
        pointer1 = pointer1.next;
        pointer2 = pointer2.next.next;
        
        if(pointer1 === pointer2){
            return true;
        }
    }
    
    return false;
};

