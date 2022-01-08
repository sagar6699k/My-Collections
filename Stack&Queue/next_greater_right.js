function runProgram(input) {

    let arr = input.trim().split("\n");
    let T = Number(arr[0]);
    let ele = arr[1].trim().split(" ").map(Number);

    let stack = [];
    let n = -1;
    let box = [];

    for (let i = ele.length-1; i >= 0; i--) {
        
        if (stack.length == 0) {
            box.push(n);
        }

        else if (stack.length > 0 && stack[stack.length-1] > ele[i]) {
            box.push(stack[stack.length-1]);
        }

        else if (stack.length > 0 && stack[stack.length-1] <= ele[i]) {
            
            while (stack.length > 0 && stack[stack.length-1] <= ele[i]) {
                stack.pop();
            }

            if (stack.length == 0) {
                box.push(n)
            }else{
                box.push(stack[stack.length-1])
            }
        }
        
        stack.push(ele[i])
    }

    console.log(box.reverse().join(" "));


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