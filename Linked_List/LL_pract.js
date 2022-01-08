class Node {
    constructor(element){
        this.element = element,
        this.next = null
    }
}


class LinkedList {
    //constructor
    constructor(){
        this.head = null,
        this.size = 0
    }


    //methods

    //add
    //insert
    //delete
    //print

    //optional methods
    //isEmpty
    //lisSize

    //add
    add(ele){
        let node = new Node(ele);
        //now check , if linklist is empty or not
        if(this.head === null){
            this.head = node
        }
        else{
            let current = this.head
            while (current.next) {
                current = current.next;
            }

            current.next = node
        }
        this.size++;
    }


    //insertAt

    insertAt(ele , index){
        // index is greter than size , size=0 , index negative  then invalid
        if (index > this.size || index < 0 && this.size) {
            return false;
        }

        let i = 0;
        let node = new Node(ele);
        let current = this.head;
        let prev = null;
        if (index === 0 ) { //if the index == 0 only
            node.next = current;
            this.head = node;
        }
        else{
            while (i < index) {           // index=1
                prev = current;           //(5 , {7 , null})
                current = current.next    // (7 , null)
                i++;
            }
            //insert at the index 
            prev.next = node;            //(5 , {10 , null})
            //move to the inserted node
            prev = prev.next             //(10 , null)
            //add the rest of current to the inserted node
            prev.next = current          // (7 , null)
            //increment size 
            this.size++;
        }
       

    }


    //removeElement

    removeElement(ele){
        let current = this.head;
        let prev = null;

        while (current) {
            if (current.element === ele) {
                if (prev === null) {
                    this.head = current.next;
                }
                else{
                    prev.next = current.next;
                }
                this.size--
                return true;
            }
            prev = current;
            current = current.next;
        }
    }
   
    //isEmpty
    isEmpty(){
        return this.size === 0?true:false
    }
    

    //size
    listSize(){
        return this.size
    }

    //print
    printList(){
        let current = this.head
        let index = 0;
        while(current){
            console.log("element:",current.element , "i:", index);
            current = current.next
            index++
        }
    }
}

// let newNode = new Node(50);
// console.log('newNode:', newNode)

let list = new LinkedList()
list.add(5)
list.add(7)
list.insertAt(10 , 1)
list.removeElement(5)

list.printList()
console.log('size of list:', list.listSize())










