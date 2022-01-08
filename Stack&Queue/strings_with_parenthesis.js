function runProgram(input) {

    var array = input.trim().split("");
    
    let stack = [];

    for (let i = 0; i < array.length; i++) {
       
        if (stack[stack.length-1] == "(" && array[i] == ")"  || stack[stack.length-1] == "[" && array[i] == "]" || stack[stack.length-1] == "{" && array[i] == "}") {
            
            stack.pop();

        } else {
            
            if (array[i] === "(" || array[i] === ")" || array[i] === "[" || array[i] === "]" || array[i] === "{" || array[i] === "}") {
                
                stack.push(array[i])
            }
            
        }
        
    }

    if (stack.length === 0) {
        console.log("balanced");
    } else {
        console.log("unbalanced");
    }
   
    
  
  
  
    
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