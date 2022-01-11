function runProgram(input) {

    var arr = input.trim().split("");

    function Balanced_or_Not(arr) {
        let stack = [];

        for (let i = 0; i < arr.length; i++) {
            
            if ((stack[stack.length-1] === "(" && arr[i] === ")") || (stack[stack.length-1] === "[" && arr[i] === "]") || (stack[stack.length-1] === "{" && arr[i] === "}") ) {
            
                stack.pop();
            }
            else {
                if (( arr[i] === ")") || ( arr[i] === "(") || ( arr[i] === "[") || ( arr[i] === "]") || ( arr[i] === "{") || ( arr[i] === "}")) {
                    
                    stack.push(arr[i]);
                }
            }
            
        }

        if (stack.length === 0) {
            return "balanced"
        }
        else {
            return "unbalanced"
        }
    }

    console.log(Balanced_or_Not(arr));

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
    