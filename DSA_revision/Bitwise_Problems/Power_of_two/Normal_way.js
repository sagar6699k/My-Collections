function runProgram(input) {

    var n = Number(input);
    function PowerOfTwo(n) {
        
        if (n === 0) {
            return "No"
        }
        else {
            while (n%2 === 0) {
                n = n / 2;
            }
        }
        if (n === 1) {
            return "Yes"
        }
        else {
            return "No"
        }
    }
   
    console.log(PowerOfTwo(n));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`36`);
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
    
  