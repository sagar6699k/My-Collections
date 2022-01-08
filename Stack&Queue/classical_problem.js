function ClassicalProblem(array) {
    
    let stack = [];
    for (let i = 0; i < array.length; i++) {
        
        if (stack[stack.length-1] == "(" && array[i] == ")"  || stack[stack.length-1] == "[" && array[i] == "]" || stack[stack.length-1] == "{" && array[i] == "}") {
            
            stack.pop();

        }
        else{
            stack.push(array[i]);
        }

    }

    if (stack.length == 0) {
        console.log("balanced");
    }else{
        console.log("not balanced");
    }
}


function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());

    let line = 1;
    for (let i = 1; i <= T; i++) {
        let array = arr[line].trim().split("");
        line++;
        ClassicalProblem(array)
        
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