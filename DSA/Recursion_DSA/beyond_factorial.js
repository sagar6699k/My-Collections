function runProgram(input) {

    var N = Number(input)

    function Facto(N) {
        if (N === 1 || N === 0) return 1;

        return N*Facto(N-1)
    }
   
    let ln = Math.log(Facto(N))
    console.log(ln.toFixed(4));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3`);
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