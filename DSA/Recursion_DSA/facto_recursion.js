function runProgram(input) {

    var n = Number(input)
    
    function fact(n) {
        if (n == 1 || n == 0) {
            return 1
        }
    
        return ( n * fact(n-1) )
    }
    
    console.log(fact(n))
  
  
    
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