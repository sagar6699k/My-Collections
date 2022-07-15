// Description

// In this question, you are given a 2D array stored in a variable with the namearr

// The number of rows in the matrix is stored in the variable with the nameN, while the number of columns stored in the matrix is stored in a variable with the nameM

// You have to find and print the count of prime numbers present in the matrix

// For example, consider the value stored inN = 3, andM = 3, and
// N = 3 M = 3

// arr = [[1 2 3]
//        [4 5 6]
//        [7 8 9]]
// The prime numbers in the 2D array are2,3,5,7. Therefore, the required output is 4

// Note : The 2D array may contain duplicate elements. Each instance of a prime number should be counted separately




function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, m] = array[0].trim().split(" ").map(Number);
    let mat = [];
    for (let i = 1; i <= n; i++) {
        mat.push(array[i].trim().split(" ").map(Number));
    }
    

    function Matrix_Prime_Check(n, m, mat) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (isPrime(mat[i][j])) {
                    count++
                }
            }
        }
        return count;
    }
   
    function isPrime(n) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n%i === 0) {
                count++;
            }
        }
        if (count === 2) {
            return true;
        }
        else {
            return false;
        }
    }
    
    console.log(Matrix_Prime_Check(n, m, mat));
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3 3
      1 2 3 
      4 5 6
      7 8 9`);
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
    
  