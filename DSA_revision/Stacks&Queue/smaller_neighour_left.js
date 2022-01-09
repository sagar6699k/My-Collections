function runProgram(input) {

    let array = input.trim().split("\n");
    let n = Number(array[0]);
    let arr = array[1].trim().split(" ").map(Number);

    let stack = [];
    let res = [];
    let default_value = -1;

    for (let i = 0; i < n; i++) {
        
        while (stack.length !== 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            res.push(default_value);
        }
        else {
            res.push(stack[stack.length - 1]);
        }

        stack.push(arr[i]);
    }

    console.log(arr, res);

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`8
      39 27 11 4 24 32 32 1`);
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