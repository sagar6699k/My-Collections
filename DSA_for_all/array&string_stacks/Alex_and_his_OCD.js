// Description

// Given an array where the ith song has a duration of Ai seconds.
// You need to find out the number of pairs of songs whose total duration in seconds is divisible by 60 since Alex has an OCD of the perfect duration of songs (i.e the pair ends with the minute ending)
// Note that pairs (1,2) and (2,1) are not counted separately.

// input                            output
// 2                                  3
// 3                                  2
// 60 60 60
// 5
// 30 30 10 20 400

function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
      let n = Number(array[line].trim());
      line++;
      let arr = array[line].trim().split(" ").map(Number);
      line++;
      
      console.log(Find_Such_Pair(n, arr));
    }

    function Find_Such_Pair(n, arr) {
        
        let count = 0;
        for (let i = 0; i < n-1; i++) {
            for (let j = i+1; j < n; j++) {
                let sum = arr[i] + arr[j];
                if (sum%60 === 0) {
                    count++;
                }
            }
        }
        return count;
    }
    
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      3
      60 60 60
      5
      30 30 10 20 400`);
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
    