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
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    console.log(MaxSumSubarray(arr, n));
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`8
      -2 -3 4 -1 -2 1 5 -3`);
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
    
  
  
  