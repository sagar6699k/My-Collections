function main(){
    console.log('A');
    setTimeout(
       function print(){ console.log('B'); }
    ,0);
    console.log('C');
 }
main();
 
// What is the output of above code?
// 1: A, B and C
// 2: B, A and C
// 3: A and C
// 4: A, C and B

// Ans is 4


// The statements order is based on the event loop mechanism. The order of statements follows the below order,

// At first, the main function is pushed to the stack.
// Then the browser pushes the fist statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.
// But setTimeout statement moved to Browser API to apply the delay for callback.
// In the meantime, C's console.log added to stack, executed and popped out.
// The callback of setTimeout moved from Browser API to message queue.
// The main function popped out from stack because there are no statements to execute
// The callback moved from message queue to the stack since the stack is empty.
// The console.log for B is added to the stack and display on the console.


//So basically, Event loop job is to contineously monitor the callstack and massage queue. If this callstack is empty and event loop sees that there is function waiting inside massage queue to be executed, it just take the function and pushing it into the callstack and it pops off event queue.