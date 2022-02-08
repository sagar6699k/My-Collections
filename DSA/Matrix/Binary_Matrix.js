// Description

// You are given a binary matrix of size N x M. A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.

function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, m] = array[0].trim().split(" ").map(Number);
    let matrix = [];
    
    for (let i = 1; i <= n; i++) {
        // matrix.push(array[i].trim().split(" ").map(Number))
        let row = array[i].trim().split(" ").map(Number);

        for (let j = 0; j < m; j++) {
            if (row[j] === 0) {
                row[j] = 1;
            }
            else if (row[j] === 1) {
                row[j] = 0;
            }
        }

    
        console.log(row.join(" "));
    }

    

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3 2
      1 0
      0 1
      1 1`);
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
    
  