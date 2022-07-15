function runProgram(input) {

    var n = Number(input);

    function Fibbonacci(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;

        return Fibbonacci(n - 1) + Fibbonacci(n - 2);
    }
   
    console.log(Fibbonacci(n));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`6`);
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
    