function runProgram(input) {

    var n = Number(input);
    
    // console.log(n&(n-1));
    //bcz 3&4=0, 7&8=0, 15&16=0; so it is following one pattern 
    function PowerOfTwo(n) {
        if (n === 0) {
            return "No"
        }
        else {
            let value = n&(n-1)
            if (value == 0) {
                return "Yes"
            }
            else {
                return "No"
            }
        }
    }
   
    console.log(PowerOfTwo(n));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`32`);
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
    
  