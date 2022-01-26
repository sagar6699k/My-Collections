// Description

// You are given a range of integers [1,n], (Both inclusive).
// An operator G(a,b) is defined as: {gcd(a,b)}, where a and b are distinct and are selected from the given range.
// Find the maximum possible value using operator G.

// input                output
// 3                       1
// 2                       5
// 11                      6
// 12

function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    for (let i = 1; i <= T; i++) {
        let n = Number(array[i].trim());

        console.log(Math.floor(n/2));
    }
   
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      2
      11
      12`);
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
    