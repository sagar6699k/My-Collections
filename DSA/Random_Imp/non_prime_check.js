function runProgram(input) {

    var inp = input.trim().split("\n");
    
    let [n,m] = inp[0].trim().split(" ").map(Number);
    
    let matrix = [];

    for (let i = 1; i < inp.length; i++) {
        matrix.push(inp[i].trim().split(" ").map(Number));
        
    }
    
    let res = [];
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < m; j++) {
            let count = 0;
           for (let k = 1; k <= matrix[i][j]; k++) {
               if (matrix[i][j] % k == 0) {
                   count++;
               }
               
           }
            if (count == 2) {
                res.push(matrix[i][j])
            }
          
        }
        
    }
    console.log((n*m) - (res.length));

  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3 3
      1 2 3
      4 5 6
      7 8 9 `);
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