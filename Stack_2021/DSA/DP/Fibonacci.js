function runProgram(input) {
    var n = Number(input.trim())
    
    let dp = new Array(n + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
  
    function Fibonacci(n) {
      if (dp[n] === -1) {
        dp[n] = (Fibonacci(n-1) + Fibonacci(n-2))
      }
          
      return dp[n]
    }
  
    console.log(Fibonacci(n));
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5`);
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
    
  
  
  
  // json-server db.json --port 3001 --watch
  // json-server cart.json --port 3001 --watch
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()