function BalanceOrNot(arr) {
    let stack = [];

   for (let i = 0; i < arr.length; i++) {
       
       if ((stack[stack.length-1] === "(" && arr[i] === ")") || (stack[stack.length-1] === "[" && arr[i] === "]") || (stack[stack.length-1] === "{" && arr[i] === "}")  ) {
           
           stack.pop();

       }
       else {
           stack.push(arr[i]);
       }
   }

    if (stack.length === 0) {
        return "balanced"
    } else {
        return "not balanced"
    }


}



function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());

    for (let i = 1; i <= T; i++) {
        let arr = array[i].trim().split("");
        console.log(BalanceOrNot(arr));
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      {([])}
      ()
      ([]
      `);
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
    
  
  
  