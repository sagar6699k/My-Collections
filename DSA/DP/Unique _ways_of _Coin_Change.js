// Description

// Given an array, A of m denominations of coins and given an amount n, find a number of unique ways to make the change from the given coin types.

// Input Format

// The first line contains two space-separated integers describing the respective values of
// n and m, where:
// n is the required amount
// m is the number of coin types
// The second line containsan array of integers representing available denominations.

// input                     outpu
// 4 3                         4
// 1 2 3

// Sample Input 1 Explanation

// There are four ways to make the change for n = 4using coins with values given by:
// A = [1,2,3] :

// 1 .{1,1,1,1}

// 2. {1,1,2}

// 3. {2,2}

// 4. {1,3}

// thus we print 4 as answer.



function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, m] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);
    
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4 3
      1 2 3`);
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
    
  