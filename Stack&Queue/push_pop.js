// Push, Pop and Top Ended
// Description

// There is a stack of integers which is currently empty. You are given an integer n and there are n operations that you need to perform on the stack.

// The next n line contains one of the following 3 operations:

// 1 x : Push x to the top of the stack.

// 2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

// 3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

// For better understanding, read sample test case explanation




function runProgram(input) {

    let arr = input.trim().split("\n");
    let T = Number(arr[0].trim());

    let stack = [];
    let top = -1;


    for (let i = 1; i < arr.length; i++) {
        let [s,n] = arr[i].trim().split(" ").map(Number);
        // console.log(s, n)

        if (s === 1) {
            top++;
            stack[top] = n;

        }else if(s === 2 && stack.length > 0){

            top--
        }else if (s === 3) {
            
            if (top === -1 ) {
                console.log("Empty!");
            }else{
                console.log(stack[top]);
            }
        }

    }
  
   
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`6
      1 15
      1 20
      2
      3
      2
      3`);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }