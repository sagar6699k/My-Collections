function runProgram(input) {

    var array = input.trim().split("\n");
    let X = array[0].trim().split("");
    let n = X.length
    let Y = array[1].trim().split("");
    let m = Y.length

    function LCS(X, Y, n, m) {
        
        if (n === 0 || m === 0) return 0;  //Base conditions

        if (X[n-1] === Y[m-1]) {
            return 1 + LCS(X, Y, n-1, m-1)
        }

        else {
            return Math.max( LCS(X, Y, n-1, m), LCS(X, Y, n, m-1) )
        }

    }

    console.log(LCS(X, Y, n, m));
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`AEDFHR
      ABCDGH`);
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
    
  
  
