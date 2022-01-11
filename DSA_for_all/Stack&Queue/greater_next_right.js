const NextGreaterRight = (n, arr) => {
  let stack = [];
  let res = [];

  for (let i = n-1; i >= 0; i--) {
    
    while (stack.length !== 0 && stack[stack.length-1]<= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      res.push(-1);
    }
    else {
      res.push(stack[stack.length - 1]);
    }


    stack.push(arr[i]);
  }

  return res.reverse().join(" ");
}


function runProgram(input) {

    let array = input.trim().split("\n");
    let T = Number(array[0]);
    let line = 1;

    for (let i = 1; i <= T; i++) {
      let n = Number(array[line].trim());
      line++;
      let arr = array[line].trim().split(" ").map(Number);
      line++;

      console.log(NextGreaterRight(n, arr));
      
    }

    

   

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      4
      1 3 2 4`);
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