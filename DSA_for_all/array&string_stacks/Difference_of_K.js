// Description

// You are given a sorted arrayAof sizeN, and another integerK
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo


//input                             output
// 2                                Yes
// 5 3                              No
// 1 2 3 4 5
// 5 8
// 1 2 3 4 5 


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;
        console.log(Difference_of_K(n, k, arr));
    }

    function Difference_of_K(n, k, arr) {
        
        let l = 0;
        let r = n - 1;
        while (l < r) {
            if (arr[r]-arr[l] === k) {
                return "Yes"
            }
            else if (arr[r]-arr[l] < k) {
                l++;
            }
            else if (arr[r]-arr[l] > k) {
                r--;
            }
          
        }
        return "No"
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      5 3
      1 2 3 4 5
      5 8
      1 2 3 4 5 `);
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
    