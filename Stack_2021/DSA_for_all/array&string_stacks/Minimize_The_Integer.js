// Description

// Given an integer, rearrange the digits in such a manner that it is the minimum possible integer after rearrangement.
// Note that no integers having leading zeroes are present in the test cases and do not consider them as a minimum while presenting the output.
// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n ( - (10^(999)) < n < 10^(1000) ).

//input                     output
// 2                        11233345
// 53334121                 -9211100
// -1002911


function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    for (let i = 1; i <= n; i++) {
        let arr = array[i].trim().split("");

        console.log(Minimize_The_Integer(arr));
    }

   function Minimize_The_Integer(arr) {
       if (arr[0] === "-") {
           arr.sort((a, b) => b - a);

           return arr.join("")
       }
       else {
           arr.sort((a, b) => a - b);
           let i = 0;
           let res = [];
           let ans = [];
           while (arr[i] === '0') {
            let temp = arr.shift();
            res.push(temp);
            i++;
           }
           let temp1 = arr.shift();
           res.push(temp1);
           let temp2 = arr.shift();

           ans.push(temp2);
           ans = [...ans, ...res];
           ans = [...ans, ...arr]
        return ans.join("")
       }
   }
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      53330001
      -1002911
      `);
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
    
  