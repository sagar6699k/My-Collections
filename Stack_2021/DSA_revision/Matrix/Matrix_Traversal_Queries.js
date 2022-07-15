// Description

// You are given a matrix of size n x m , and two types of queries are to be performed on this matrix. The two types of queries are
// q = 1, for this type of query, the matrix is to be traversed, as shown in Fig. 1
// q = 2, for this type of query, the matrix is to be traversed as shown in Fig. 2


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let [n, m, q] = array[line].trim().split(" ").map(Number);
        line++;
        let matrix = [];
        for (let j = line; j < line+n; j++) {
            matrix.push(array[j].trim().split(" ").map(Number));
        }
        line = line + n;

        console.log(MatrixTraversal(n, m, q, matrix));
        
    }

    function MatrixTraversal(n, m, q, matrix) {
        let res = [];
        if (q === 1) {
            for (let i = 0; i < n; i++) {
                if (i%2 === 0) {
                    for (let j = 0; j < m; j++) {
                        res.push(matrix[i][j]);
                    }
                }
                else if (i%2 !== 0) {
                    for (let j = m-1; j >= 0; j--) {
                        res.push(matrix[i][j]);
                    }
                }
            }
        }
        else if (q === 2) {
            for (let i = 0; i < n; i++) {
                if (i%2 === 0) {
                    for (let j = m-1; j >= 0; j--) {
                        res.push(matrix[i][j]);
                    }
                }
                else if (i%2 !== 0) {
                    for (let j = 0; j < m; j++) {
                        res.push(matrix[i][j]);
                    }
                }
            }
        }

        return res.join(" ")
    }
   
    
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      3 3 1
      1 2 3
      4 5 6
      7 8 9
      3 3 2
      1 2 3
      4 5 6
      7 8 9
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
    
  