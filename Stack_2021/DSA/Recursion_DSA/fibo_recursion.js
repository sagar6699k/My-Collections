function runProgram(input) {

    var n = input
    
   
    function fibo(n) {
        if (n == 1 ) return 1
        if (n == 0 ) return 0
            
        return ( fibo(n-1) + fibo(n-2) )
    }
    
    console.log(fibo(n))
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4`);
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