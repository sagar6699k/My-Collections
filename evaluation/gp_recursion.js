function runProgram(input) {

    var [n , r] = input.trim().split(" ").map(Number);
    
   
    function SumOfGp(n,r) {
        if (n === 0) return 1

        let sum = 1/(r**n) 
        return sum + SumOfGp(n-1,r)
    }
  
    console.log(SumOfGp(n,r).toFixed(4));
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3 5`);
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