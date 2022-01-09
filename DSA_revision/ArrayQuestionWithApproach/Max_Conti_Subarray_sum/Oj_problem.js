function MaxSumSubarray(arr, n) {
    let sum = -Infinity;
    let curr_sum = 0;

    for (let i = 0; i < n; i++) {
        curr_sum = curr_sum + arr[i];
        if (curr_sum > sum) {
            sum = curr_sum;
        }
        if (curr_sum < 0) {
            curr_sum = 0;
        }
    }

    return sum;

}



function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());

    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;


        console.log(MaxSumSubarray(arr, n));
    }
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`3
        3
        1 2 3
        4
        -1 -1 0 1
        3
        2 -1 2`);
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
    
  
  
  