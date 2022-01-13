function runProgram(input) {

    var arr = input.trim().split("");
    let stack = [];
    //aaabccddd
    
    for (let i = 0; i < arr.length; i++) {

        if (stack.length !== 0 && stack[stack.length-1] === arr[i]) {
            stack.pop();
        }
        else {
            stack.push(arr[i]);
        }
    }
    
    if (stack.length !== 0) {
        console.log(stack.join(""));
    } else {
        console.log("Empty String");
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`aaabccddd`);
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
    
  
  
  