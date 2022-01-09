function runProgram(input) {

    var arr = input.trim().split("");
    
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
      if (stack[stack.length-1] == arr[i] && stack.length>0) {
        stack.pop();
      }

      stack.push(arr[i])
    
  }

  console.log(stack.join(" "));


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