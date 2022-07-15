// Description

// Given an array A with n integers, find the maximum product possible with two array elements having distinct indexes.
// Mathematically, find the max (Ai*Aj) where i not equal to j.

// input                            output
// 3                                   28
// 6                                   20
// 1 0 7 2 4 0                          0
// 5
// 1 2 3 4 5
// 2
// 0 0





function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;
        
        console.log(Maximum_Product_Possible(n, arr));
    }
    
    function Maximum_Product_Possible(n, arr) {
        let res = 1;
        for (let i = 0; i < n; i++) {
            let prod = 1;
            for (let j = i+1; j < n; j++) {
                prod = arr[i] * arr[j];
                res = Math.max(res, prod)
            }
        }
        return res;
    }
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      6 
      1 0 7 2 4 0
      5
      1 2 3 4 5
      2
      0 0`);
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
    